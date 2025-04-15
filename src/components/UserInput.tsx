import {styled} from 'styled-components';

const SectionInput = styled.section`
    padding: 1rem;
    max-width: 30rem;
    margin: 2rem auto;
    border-radius: 4px;
    background: linear-gradient(180deg, #307e6c, #2b996d);
`
const Label = styled.label`
    display: block;
    margin-bottom: 0.25rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 0.5rem;
    font-weight: bold;
    text-transform: uppercase;
`

const Input = styled.input.withConfig({
    shouldForwardProp: (prop) => prop !== '$invalid',
})<{$invalid?: boolean}>`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #76c0ae;
    border-radius: 0.25rem;
    background-color: ${({$invalid}) => {
        return $invalid ? '#A52A2A' : 'transparent';
    }};
    color: '#c2e9e0';
    font-size: 1rem;
`;

export default function UserInput({onChange, isValid, input}: {
    input: {
        initialInvestment: number,
        annualInvestment: number,
        expectedReturn: number,
        duration: number
    },
    isValid: boolean,
    onChange: (key: string, value: string) => void,
}) {
    return (
        <SectionInput className='grid grid-cols-2 gap-6 max-w-100'>
            <div className="flex flex-col">
                <Label>Initial investment</Label>
                <Input
                    type="number"
                    value={input.initialInvestment}
                    onChange={
                        (event) => onChange('initialInvestment', event.target.value)
                    }
                />
            </div>
            <div className="flex flex-col">
                <Label>Annual Investment</Label>
                <Input
                    type="number"
                    value={input.annualInvestment}
                    onChange={
                        (event) => onChange('annualInvestment', event.target.value)
                    }
                />
            </div>
            <div className="flex flex-col">
                <Label>Expected Return</Label>
                <Input
                    type="number"
                    value={input.expectedReturn}
                    onChange={
                        (event) => onChange('expectedReturn', event.target.value)
                    }
                />
            </div>
            <div className="flex flex-col">
                <Label>Duration</Label>
                <Input
                    type="number"
                    value={input.duration}
                    $invalid={!isValid}
                    onChange={
                        (event) => onChange('duration', event.target.value)
                    }
                />
            </div>
        </SectionInput>
    )
}