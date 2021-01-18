import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RestaurantApp from './RestaurantApp';
import EmotionApp from "./EmotionApp";
import GithubApp from './GithubApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    // 1. html element
    // React.createElement(
    //     "h1",
    //     {style: {color: "blue"}},
    //     "I like"
    // ),
    // 2. unordered list
    // React.createElement(
    //     "ul",
    //     null,
    //     React.createElement(
    //         "li", null, "1"
    //     ),
    //     React.createElement(
    //         "li", null, "2"
    //     )
    // ),
    // 3. jsx -> babel
    // <ul>
    //     <li>Monday</li>
    //     <li>Tuesday</li>
    // </ul>,
    // 4. component
    // <RestaurantApp />,
    // <EmotionApp authorized = {false} />,
    <GithubApp login = "funfun0737" />,
    // where we want to put it
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
