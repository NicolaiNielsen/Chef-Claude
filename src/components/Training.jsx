import React from "react"


export default function Training() {
    const [messages, setMessages] = React.useState(["a", "b"])

    function messages1() {
        if (messages.length == 0) {
            return "You're all caught up"
        } else if (messages.length > 0) {
            return "No ned meessages"
        } else {
             setMessages(prev => prev + 11 )
            return "YOu have many messagess"
        }        
    }



    return (
        <div>
            <h1>
                {messages1()}
            </h1>
        </div>
    )
}