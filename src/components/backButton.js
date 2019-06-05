import React from 'react'
import { Link } from 'gatsby'

const BackButton = () => {
    return (
        <Link to="/">
            <div> { '<-' } </div>
        </Link>

    )
}

export default BackButton
