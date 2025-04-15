import {styled} from 'styled-components';
import {TypeUserInput} from "../App.tsx";
import CustomInput from './Input.tsx';

const SectionInput = styled.section`
    padding: 1rem;
    max-width: 30rem;
    margin: 2rem auto;
    border-radius: 4px;
    background: linear-gradient(180deg, #307e6c, #2b996d);
`

export default function UserInput({onChange, isValid, input}: {
    input: TypeUserInput,
    isValid: boolean,
    onChange: (key: string, value: string) => void,
}) {
    return (
        <SectionInput className='grid grid-cols-2 gap-6 max-w-100'>
            <div className="flex flex-col">
                <CustomInput
                    type="number"
                    label='Initial investment'
                    value={input.initialInvestment}
                    onChange={
                        (event) => onChange('initialInvestment', event.target.value)
                    }
                />
            </div>
            <div className="flex flex-col">
                <CustomInput
                    type="number"
                    label='Annual Investment'
                    value={input.annualInvestment}
                    onChange={
                        (event) => onChange('annualInvestment', event.target.value)
                    }
                />
            </div>
            <div className="flex flex-col">
                <CustomInput
                    type="number"
                    label='Annual Investment'
                    value={input.expectedReturn}
                    onChange={
                        (event) => onChange('expectedReturn', event.target.value)
                    }
                />
            </div>
            <div className="flex flex-col">
                <CustomInput
                    type="number"
                    label='Duration'
                    value={input.duration}
                    invalid={!isValid}
                    onChange={
                        (event) => onChange('duration', event.target.value)
                    }
                />
            </div>
        </SectionInput>
    )
}