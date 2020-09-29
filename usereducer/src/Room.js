import React, { useReducer } from 'react';
import './styles.css';

function reducer(state, action) {
    switch (action) {
        case "off":
            return state = "low"
        case "low":
            return state = "medium"
        case "medium":
            return state = "high"
        case "high":
            return state = "off"
    }
}
export default function Room() {
    const [state, dispatch] = useReducer(reducer, "off");
    return (<div className={state}>
        Hello from Room < br />
        Room light: {state} < br />
        <button onClick={() => dispatch(state)} > Change light level </button>
        <button onClick={() => dispatch("high")} > Light On / Off </button>
        <ul><li>off</li>
            <li>low</li>
            <li>medium</li>
            <li>high</li>
        </ul>
    </div>
    )
};