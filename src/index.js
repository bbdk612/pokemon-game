import React from "react";
import ReactDOM from 'react-dom'

import HeaderBlock from "./components/HeaderBlock";

import './index.css';

// const el = React.createElement(
//     'h1',
//     null,
//     'Hello World, ReactJS!'
// );

const AppList = () => {
    const items = ['Item1', 'Item2', "item3", "Item5"];
    const firstItems = <li>Item 0</li>
    const isAuth = true;
    return (
        <ul>
            {
                isAuth ? firstItems : null
            }
            {
                items.map(item => <li>{item}</li>)
            }
            <li>My first Element</li>
            <li>My Second Element</li>
            <li> {items[0]} </li>
            <li> {items[1]} </li>
        </ul>
    )
}

const AppHeader = () => {
    return (
        <h1
            className="header"
        >
            This is my Header
        </h1>
    );
}

const AppInput = () => {
    const placeholder = "Type text..."
    return (
        <label>
            <input placeholder={placeholder} />
        </label>
    )
}


const App = () => { 
    return (
        <>  
            <HeaderBlock />  
            <AppHeader />
            <AppInput />
            <AppList />
            <AppHeader />
            <AppList />
        </>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));