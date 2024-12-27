import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <div style={styles.container}>
        <nav style={styles.nav}>
            <Link to='jewelery' style={styles.link}>Jewelery</Link>
            <Link to='menscloths' style={styles.link}>MensClothing</Link>
            <Link to='womenscloths' style={styles.link}>WomensClothing</Link>
            <Link to='electronics' style={styles.link}>Electronics</Link>
        </nav>

        <div style={styles.outletContainer}>
            <Outlet/>
        </div>
    </div>
  )
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f9f9f9'
  },
  nav: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    padding: '10px',
    borderRadius: '5px'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  outletContainer: {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  }
}
