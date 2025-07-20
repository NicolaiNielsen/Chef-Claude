import React from "react"
import Count from "./Count"

export default function Main() {

    const [ingridient, setIngredient] = React.useState([])

    function handleSubmit(formData) {
        const input = formData.get("input")
        setIngredient(prev => [...prev, input])
    }

    const foods = ingridient.map((f, i) => <li key={i}>{f}</li>)

    const [recipeShown, setRecipeShown] = React.useState(false)

    function getRecipe() {
        setRecipeShown(prev => !prev)
    }

    return (
        <main>
            <Count prop="2"/>
            <form action={handleSubmit} className="form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add Ingredient"
                    name="input"
                />
                <button>+ Ingredient</button>
            </form>
            {
                ingridient.length > 0 &&
                <div className="food">
                    <h2>Ingredients on hand:</h2>
                    <ul>
                        {foods}
                    </ul>
                </div>
            }
            {
                ingridient.length > 3 &&

                <div className="bottom-box">
                    <div className="info">
                        <h3>Ready for recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={getRecipe}>Get a recipe</button>
                </div>
            }
            {
                recipeShown &&
                <div className="recipe">
                    <p>placehodler redecipe</p>
                </div>
            }
        </main>
    )
}