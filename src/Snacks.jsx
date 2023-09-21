import { NavLink } from 'react-router-dom'

function Snacks() {
    return (
        <>
            <NavLink to={'/'}>Back</NavLink>
            <h2>
                You try to buy a snack.
            </h2>
            <p>But it gives you a Pepsi instead.</p>
            <p>It's all Pepsi.</p>
        </>
    )
}

export default Snacks;