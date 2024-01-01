import { useEffect, useState } from "react";


function Photos() {
    const [isShow, setIsShow] = useState(false)
    const [text, setText] = useState("")
    const [count, setCount] = useState(0)


    const clickHandler = () => {
        setIsShow(isShow => !isShow)
        setText(text => "hasan")
        setCount(count => count + 1)
    }
    return (
        <div>
            <h1>Hello World!💻</h1>
            <p>{count}</p>
            {isShow && <h2>React Course</h2>}
            <h3>{text}</h3>
            <button onClick={clickHandler}>Toggle</button>
        </div>
    );
}

export default Photos;
