import Header from "./components/Header.tsx";
import UserInput from "./components/UserInput.tsx";
import Results from "./components/Results.tsx";
import {useState} from "react";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 15000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const inputIsValid: boolean = userInput.duration >= 1;

    function handleChange(inputIdentifier: string, newValue: {
        initialInvestment: number,
        annualInvestment: number,
        expectedReturn: number,
        duration: number
    }) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue,
            }
        })
    }

    return (
        <>
            <Header/>
            <UserInput
                input={userInput}
                isValid={inputIsValid}
                onChange={handleChange}
            />
            {!inputIsValid && <p className="center">Please enter duration grater than zero</p>}
            {inputIsValid && <Results input={userInput}  />}
        </>
    )
}

export default App
