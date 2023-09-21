import { NavLink } from 'react-router-dom'

function Machine() {

    const display = `
            ______________________
            |  ___    ___    ___  |
            | |   |  |   |  |   | |
            | |pep|  |pep|  |pep| |
            | |___|  |___|  |___| |
            |  ___    ___    ___  |
            | |   |  |   |  |   | |
            | |pep|  |pep|  |pep| |
            | |___|  |___|  |___| |
            |                     |
            |_____________________|
            |_____________________|
            |                     |
            |                     |
            |  _________________  |
            | |                 | |
            | |                 | |
            | |                 | |
            | |_________________| |
            |_____________________|

            `;

    return (
        <>
            <p>It's a vending machine.</p>
            <nav>
                <NavLink to={'/Snacks'}>Get a snack.</NavLink>
                <br />
                <NavLink to={'/Drinks'}>Get a drink.</NavLink>
            </nav>
            <pre>
                {display}
            </pre>
        </>

    )
}


export default Machine;