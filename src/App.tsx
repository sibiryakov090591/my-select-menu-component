import React, {useState} from 'react';
import './App.css';
import {Select} from "./components/select/select";

function App() {

    const selectItems = [
        "Minsk",
        "Moscow",
        "Kiev",
    ];


    return (
        <div className="App">
            <Select titles={selectItems}/>
            <div className="TestBlock">Test block</div>
        </div>
    );
}

export default App;
