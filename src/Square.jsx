// import { useState } from "react"

export const Square = ({ value, onSquareClick }) => {
    //const [value, setValue] = useState(null);

    // function handleClick() {
    //     setValue('X')
    // }

    return (
        <button className="square"
            // onClick={handleClick}
            onClick={onSquareClick}
        >{value}</button>
    )
}