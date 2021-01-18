import React, {useState, useEffect} from "react";

function Secret() {
    return <h1> secret page</h1>
}

function Public() {
    const [emotion, setEmotion] = useState("happy");

    // takes in a call back function
    useEffect(() => {
        console.log(`it is ${emotion} around here`);
    },[emotion]);


    const [checked, setChecked] = useState(false);

    function toggle() {
        setChecked((checked) => !checked);
    }


    return (
        <>
            <input type="checkbox" value = {checked} onChange = {toggle} />
            <p>{checked? "checked" : "not checked"}</p>
            <h1>
                Current Emotion is {emotion}.
            </h1>
            <button onClick={() => setEmotion("frustrated")}>
                Frustrated
            </button>
            <button onClick = {() => setEmotion("excited")}>
                Excited
            </button>
        </>
    );
}

const [, , third] = ["1", "2", "3"];
console.log(third);

function EmotionApp({authorized}) {
    return (
        <>
            {authorized ? (<Secret/>) : (<Public/>)}
        </>
    );
}

export default EmotionApp;