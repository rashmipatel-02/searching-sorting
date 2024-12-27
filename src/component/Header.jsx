import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div style={styles.container}>
            <Link to='/' style={styles.link}>Product</Link>
        </div>
    )
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '10px 20px',
        backgroundColor: '#333',
        textAlign: 'center',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '24px',
        fontWeight: 'bold',
    }
}
