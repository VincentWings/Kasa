import React from 'react'
import PropTypes from 'prop-types'

function Main(props) {
    const children = props.children

    return (
        <main>
            {children}
        </main>
    )
}

// Props validation
Main.propTypes = {
    children: PropTypes.node, // 'children' can be any renderable content
}

export default Main
