import {styled} from "styled-components";

const HeaderStyle = styled.header`
    text-align: center;
    margin: 3rem auto;

    & img {
        width: 5rem;
        height: 5rem;
        object-fit: contain;
        background-color: transparent;
    }

    & h1 {
        font-size: 1.5rem;
    }

`

export default function Header() {
    return (
        <HeaderStyle className='flex flex-row items-center justify-center gap-4'>
            <img src="investment-calculator-logo.png" alt="logo"/>
            <h1 className="logo">React Investment Calculator</h1>
        </HeaderStyle>)
}