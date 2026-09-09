import React, { useRef } from "react";

function Task1Form(){
    const inputRef = useRef(null);

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(inputRef.current){
            console.log("Значение: ", inputRef.current.value)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                ref={inputRef}
                placeholder="Введите текст.."
            />
            <button type="submit">Вывести в консоль</button>
        </form>
    )

}

export default Task1Form