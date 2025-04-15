export default function UserInput({ onChange , input}) {

    return (
        <section id="user-input" className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
                <label>Initial investment</label>
                <input
                    type="number"
                    value={input.initialInvestment}
                    onChange={
                        (event) => onChange('initialInvestment', event.target.value)
                    }
                />
            </div>
            <div className="flex flex-col">
                <label>Annual Investment</label>
                <input
                    type="number"
                    value={input.annualInvestment}
                    onChange={
                        (event) => onChange('annualInvestment', event.target.value)
                    }
                />
            </div>
            <div className="flex flex-col">
                <label>Expected Return</label>
                <input
                    type="number"
                    value={input.expectedReturn}
                    onChange={
                        (event) => onChange('expectedReturn', event.target.value)
                    }
                />
            </div>
            <div className="flex flex-col">
                <label>Duration</label>
                <input
                    type="number"
                    value={input.duration}
                    onChange={
                        (event) => onChange('duration', event.target.value)
                    }
                />
            </div>
        </section>
    )
}