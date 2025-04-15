import classesHeader from './Header.module.css';

export default function Header() {
    return (
        <header className={`${classesHeader.header} flex flex-row items-center justify-center gap-4`}>
            <img src="investment-calculator-logo.png" alt="logo"/>
            <h1 className="logo">React Investment Calculator</h1>
        </header>)
}