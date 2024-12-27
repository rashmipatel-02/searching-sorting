import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Electronics() {

    const [state, setState] = useState([])
    const [ascending, setAscending] = useState(true)
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetchElectronics()
    }, [])

    function fetchElectronics() {
        fetch("https://fakestoreapi.com/products/category/electronics")
            .then(res => res.json())
            .then((data) => {
                setState(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleSort() {
        const sortedData = [...state]
        if (ascending) {
            sortedData.sort((a, b) => a.price - b.price)
        }
        else {
            sortedData.sort((a, b) => b.price - a.price)
        }
        setState(sortedData);
        setAscending(!ascending)
    }

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    const filterProduct = state.filter((el) =>
        el.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Electronics</h1>
            <input type="search" placeholder='Search by title' value={search} onChange={handleSearch} style={styles.searchInput}/>
            <button onClick={handleSort}  style={styles.sortButton}>Sort by {ascending ? "desc" : "asc"} Price</button>

            <div>
                {
                    filterProduct.length > 0 ? (

                        <ol style={styles.productContainer}>

                            {filterProduct.map((product, i) => {
                                return (
                                    <div key={i} style={styles.product}>
                                        <img src={product.image} alt={product.title} style={styles.image} />
                                        <p> <b>Price</b>: ${product.price}</p>
                                        <Link to={`/productdetails/${product.id}`} style={styles.link}>{product.title}</Link>
                                    </div>
                                )
                            })}
                        </ol>
                    ):(
                        <div>
                            <h3>No Product Found</h3>
                        </div>
                    )
                }
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
    searchInput: {
        display: 'block',
        margin: '0 auto 20px',
        padding: '10px',
        width: '50%',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    sortButton: {
        display: 'block',
        margin: '0 auto 20px',
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    },
    productContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
    },
    product: {
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
    },
    image: {
        width: '50%',
        height: 'auto',
        marginBottom: '10px',
    },
    link: {
        color: '#007BFF',
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: 'bold',
    }
}
