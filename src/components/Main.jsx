import React from "react"

export default function Main() {

    const [ingridient, setIngredient] = React.useState([])

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const input = formData.get("input")
        setIngredient(prev => [...prev, input])
        event.currentTarget.reset();
    }

    const going = true

    let answer === "y" ? "s"

    if (going === true) {
        answer = "y"
    } else {
        answer = "n"
    }

    return (
        <main>
            <p>{answer}</p>
            <form onSubmit={handleSubmit} className="form">
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
                    <h4>Ingredients on hand</h4>
                    <ul>
                        {ingridient.map(f => <li>{f}</li>)}
                    </ul>
                </div>
            }
        </main>
    )
}