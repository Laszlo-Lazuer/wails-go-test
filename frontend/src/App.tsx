import {ChangeEvent, useEffect, useState} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import {Greet} from "../wailsjs/go/main/App";
import { Add } from '../wailsjs/go/main/App';
import useAutoUpdate from './useAutoUpdate';
import UpdateButton from './UpdateButton';

function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    // Check for updates
    useAutoUpdate();
    //
const [input, setInput] = useState({
        num1: "",
        num2: ""
    })

    const [result, setResult] = useState("")
    //

    useEffect(() => {
        Add(+input.num1, +input.num2).then((v) => setResult(String(v)))
    }, [input])

    function greet() {
        Greet(name).then(updateResultText);
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div id="App">
            <input name="num1" value={input.num1} onChange={handleChange} placeholder='0'></input>
            <input name="num2" value={input.num2} onChange={handleChange} placeholder='0'></input>
            <button type='submit'>add</button>
            <p>Result is {result}</p>

            {/* <div className="App"> */}
            {/* <header className="App-header"> */}
                <h1>My Wails App</h1>
                {/* <UpdateButton /> */}
            {/* </header> */}
        {/* </div> */}
        </div>
    )
}

export default App
