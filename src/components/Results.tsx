import {calculateInvestmentResults, formatter} from "../util/investment.ts";
import classes from './Results.module.css';
import {TypeUserInput} from "../App.tsx";

export default function Results({ input } : { input: TypeUserInput }) {
    const resultData = calculateInvestmentResults(input);
    const initialInvestment = resultData[0].valueEndOfYear -  resultData[0].interest -  resultData[0].annualInvestment;

    return (
        <table className={classes.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment</th>
                    <th>Interest</th>
                    <th>Total</th>
                    <th>Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map((yearData) => {
                    const totalInterest = (yearData.valueEndOfYear - yearData.annualInvestment * yearData.year) - initialInvestment;
                    const totalAmmountInvested = resultData[0].valueEndOfYear -  totalInterest;

                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}