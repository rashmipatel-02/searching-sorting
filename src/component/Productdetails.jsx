import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Productdetails() {
    const [state, setState] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetchProductDetails()
    }, [])

    function fetchProductDetails() {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then((data) => {
                setState(data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Product Details</h1>
            <div style={styles.productDetails}>
                <h2 style={styles.title}>{state.title}</h2>
                <img src={state.image} alt={state.title} style={styles.image} />
                <h3 style={styles.price}>Price: ${state.price}</h3>
                <p style={styles.description}>{state.description}</p>
            </div>
        </div>
    )
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f9f9f9',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    productDetails: {
        width: '500px',
        // height:'500px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    image: {
        width: '60%',
        marginBottom: '20px',
    },
    price: {
        fontSize: '20px',
        color: '#333',
        marginBottom: '20px',
    },
    description: {
        fontSize: '16px',
        color: '#666',
    },
}
