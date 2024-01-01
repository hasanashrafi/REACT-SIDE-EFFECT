import { useEffect, useState } from "react";


function Photos() {
    const [isShow, setIsShow] = useState(false)


    const isShowHandler = () => {
        setIsShow(true);
    }
    return (
        <div>
            <h1>Hello World!💻</h1>
            {isShow && <h2>React Course</h2>}
            <button onClick={() => setIsShow(isShow => !isShow)}>Toggle</button>
        </div>
    );
}

export default Photos;
