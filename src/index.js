import React from "react";
import ReactDOM from 'react-dom'

// const el = React.createElement(
//     'h1',
//     null,
//     'Hello World, ReactJS!'
// );

const AppList = () => {
    return (
        <ul>
            <li>My first Element</li>
            <li>My Second Element</li>
        </ul>
    )
}

const AppHeader = () => <h1>This is my Header</h1>;


const App = () => { 
    return (
        <>    
            <AppHeader />
            <AppList />
            <AppHeader />
            <AppList />
        </>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));