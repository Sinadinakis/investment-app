import {useState} from "react";
import {calculateInvestmentResults} from "../util/investment.ts";

export default function UserInput() {
    const [investment, setInvestment] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue) {
        setInvestment(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue,
            }
        })
        console.log(calculateInvestmentResults(event.target.value));
    }

    return (
        <section id="user-input" className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
                <label>Initial investment</label>
                <input
                    type="number"
                    value={investment.initialInvestment}
                    onChange={
                        (event) => handleChange('initialInvestment', event.target.value)
                    }
                />
            </div>
            <div className="flex flex-col">
                <label>Annual Investment</label>
                <input
                    type="number"
                    value={investment.annualInvestment}
                    onChange={
                        (event) => handleChange('annualInvestment', event.target.value)
                    }
                />
            </div>
            <div className="flex flex-col">
                <label>Expected Return</label>
                <input
                    type="number"
                    value={investment.expectedReturn}
                    onChange={
                        (event) => handleChange('expectedReturn', event.target.value)
                    }
                />
            </div>
            <div className="flex flex-col">
                <label>Duration</label>
                <input
                    type="number"
                    value={investment.duration}
                    onChange={
                        (event) => handleChange('duration', event.target.value)
                    }
                />
            </div>
        </section>
    )
}