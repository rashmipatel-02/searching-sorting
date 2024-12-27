import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Mensclothing() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        fetchMensclothing();
    }, []);

    function fetchMensclothing() {
        fetch("https://fakestoreapi.com/products/category/men's clothing")
            .then(res => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }

    function handleSort() {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    }

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Men's Clothing</h1>
            <input 
                type="text" 
                placeholder="Search by title" 
                value={searchTerm} 
                onChange={handleSearch} 
                style={styles.searchInput}
            />
            <button onClick={handleSort} style={styles.sortButton}>
                Sort by Price ({sortOrder === 'asc' ? 'asc' : 'desc'})
            </button>
            <div style={styles.productContainer}>
                {
                    sortedProducts.map((product, i) => (
                        <div key={i} style={styles.product}>
                            <img src={product.image} alt={product.title} style={styles.image} />
                            <p><b>Price</b>: ${product.price}</p>
                            <Link to={`/productdetails/${product.id}`} style={styles.link}>
                                {product.title}
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
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
};
