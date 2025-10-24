import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    
    // Get query from URL
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('query') || '';

    useEffect(() => {
        if (searchQuery) {
            searchProducts(searchQuery);
        }
    }, [searchQuery])

    const searchProducts = async (query) => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:3001/products", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();

            if (res.status === 201) {
                console.log("All products:", data);
                // Filter products based on search query
                const filtered = data.filter(product => 
                    product.ProductName.toLowerCase().includes(query.toLowerCase()) ||
                    product.ProductPrice.toString().includes(query) ||
                    product.ProductBarcode.toString().includes(query)
                );
                console.log("Filtered results:", filtered);
                setSearchResults(filtered);
            } else {
                console.log("Something went wrong. Please try again.");
            }
        } catch (err) {
            console.log("Error:", err);
        } finally {
            setLoading(false);
        }
    }

    const deleteProduct = async (id) => {
        const response = await fetch(`http://localhost:3001/deleteproduct/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await response.json();

        if (response.status === 422 || !deletedata) {
            console.log("Error");
        } else {
            console.log("Product deleted");
            searchProducts(searchQuery);
        }
    }

    return (
        <div className='container-fluid p-5'>
            <h1>Search Results</h1>
            <div className="mb-4">
                <p className="fs-5">Searching for: <strong>"{searchQuery}"</strong></p>
                <NavLink to="/products" className='btn btn-primary'>← Back to All Products</NavLink>
            </div>

            {/* AI Generated Image */}
            {searchQuery && (
                <div className="my-4 text-center">
                    <h3 className="mb-3">AI Generated Image</h3>
                    <div style={{
                        background: 'var(--card-bg)',
                        borderRadius: '16px',
                        padding: '2rem',
                        boxShadow: '0 10px 15px -3px var(--shadow)',
                        display: 'inline-block'
                    }}>
                        <img 
                            src={`https://image.pollinations.ai/prompt/${encodeURIComponent(searchQuery)}?width=512&height=512&nologo=true`}
                            alt={`AI generated image of ${searchQuery}`}
                            style={{
                                maxWidth: '512px',
                                width: '100%',
                                height: 'auto',
                                borderRadius: '12px',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.3)'
                            }}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        <div style={{ display: 'none', color: 'var(--text-secondary)', padding: '2rem' }}>
                            Image failed to load
                        </div>
                    </div>
                </div>
            )}

            {loading ? (
                <div className="text-center">
                    <p className="fs-4">Loading...</p>
                </div>
            ) : (
                <div className="overflow-auto mt-3" style={{ maxHeight: "38rem" }}>
                    <table className="table table-striped table-hover mt-3 fs-5">
                        <thead>
                            <tr className="tr_color">
                                <th scope="col">#</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Product Barcode</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchResults.length > 0 ? (
                                searchResults.map((element, id) => {
                                    return (
                                        <tr key={element._id}>
                                            <th scope="row">{id + 1}</th>
                                            <td>{element.ProductName}</td>
                                            <td>{element.ProductPrice}</td>
                                            <td>{element.ProductBarcode}</td>
                                            <td><NavLink to={`/updateproduct/${element._id}`} className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></NavLink></td>
                                            <td><button className="btn btn-danger" onClick={() => deleteProduct(element._id)}><i className="fa-solid fa-trash"></i></button></td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center py-5">
                                        <div className="fs-4">No products found matching "{searchQuery}"</div>
                                        <NavLink to="/products" className='btn btn-primary mt-3'>View All Products</NavLink>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}