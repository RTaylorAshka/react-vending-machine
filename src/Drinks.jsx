import { NavLink } from 'react-router-dom'

function Drinks() {
    return (
        <>
            <NavLink to={'/'}>Back</NavLink>
            <h2>
                Pepsi.
            </h2>
            <i>(pepsi)</i>
        </>
    )
}

export default Drinks;