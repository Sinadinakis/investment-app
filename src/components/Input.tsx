import {styled} from "styled-components";
import React from "react";

type CustomInputProps = {
    label: string;
    invalid?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Label =styled.label.withConfig({
    shouldForwardProp: (prop) => prop !== '$invalid',
})<{$invalid?: boolean}>`
    display: block;
    margin-bottom: 0.25rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 0.5rem;
    font-weight: bold;
    color: ${({$invalid}) => $invalid ? '#fff' : 'transparent'}
    text-transform: uppercase;
`

const Input = styled.input.withConfig({
    shouldForwardProp: (prop) => prop !== '$invalid',
})<{$invalid?: boolean}>`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #76c0ae;
    border-radius: 0.25rem;
    background-color: ${({$invalid}) => $invalid ? '#A52A2A' : 'transparent'};
    color: '#c2e9e0';
    font-size: 1rem;
`

export default function CustomInput({label, invalid, ...props} : CustomInputProps) {
    return (
        <>
            <Label $invalid={invalid}>{label}</Label>
            <Input $invalid={invalid} {...props} />
        </>
    )
}