import {useState} from "react";
import clsx from "clsx";

export default function Cell() {
    const [isClicked, setIsClicked] = useState(false);

    function handleOnClick() {
        setIsClicked(true);
    }

    return (
        <div className={clsx('cell h-10 w-10 border', isClicked && 'bg-amber-200')} onClick={handleOnClick}></div>
    )
}