import React, {useState, useEffect, useReducer} from "react";

function Secret() {
    return <h1> secret page</h1>
}

function Public() {
    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false
    );

    const [emotion, setEmotion] = useState("happy");

    // takes in a call back function
    useEffect(() => {
        console.log(`it is ${emotion} around here`);
    },[emotion]);
    
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

function EmotionApp({authorized}) {
    return (
        <>
            {authorized ? (<Secret/>) : (<Public/>)}
        </>
    );
}

export default EmotionApp;