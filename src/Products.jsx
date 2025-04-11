import "./Products.css"
import {useEffect, useState} from "react";

const categories = [
    { name: "Electronics", image: "/electron.jpeg" },
    { name: "Clothes", image: "/clothes.jpeg" },
    { name: "Toys", image: "/toys.jpeg" },
];

const product = [
    {
        name: "Kafshy Parrot",
        image: "/ima2.avif",
        price: "#34,982,798",
        rating: 5,
    },
    {
        name: "Witch Flower",
        image: "/ima3.avif",
        price: "#450,000",
        rating: 3,
    },
    {
        name: "Tree of Life",
        image: "/ima4.avif",
        price: "#240,789,897,782",
        rating: 4,
    },
    {
        name: "Plastic Globe",
        image: "/ima5.avif",
        price: "#509",
        rating: 5,
    },
];


function Products() {

    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentId((prevId) => (prevId + 1) % categories.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const current = categories[currentId];

    const [products, setProducts] = useState(product);
    const [editIndex, setEditIndex] = useState(null);
    const [newProductData, setNewProductData] = useState({
        name: "",
        price: "",
        rating: "",
        image: ""
    });

    const editFuct = (index) => {
        const product = products[index];
        setEditIndex(index);
        setNewProductData({
            name: product.name,
            price: product.price,
            rating: product.rating,
            image: product.image
        });
    };

    const changeFuct = (e) => {
        const { name, value } = e.target;
        setNewProductData({ ...newProductData, [name]: value });
    };

    const saveFuct = () => {
        const updatedProducts = [...products];
        updatedProducts[editIndex] = { ...newProductData };
        setProducts(updatedProducts);
        setEditIndex(null);
    };

    return (
            <>

                <div className="body-prod">
                    <div className="back-shop">
                        <div className="back-text">
                            <h1>Welcome to Mern Store</h1>
                            <p>You can buy quality products ranging from clothes, electronics, toys, and more</p>
                        </div>
                    </div>


                    <div className="categories">
                            <div className="category-card">
                                <img src={current.image} alt={current.name} />
                                <div className="category-name">{current.name}</div>
                            </div>
                    </div>


                    <div className="products">
                        {products.map((product, index) => (
                            <div key={index} className="product-card">
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p className="stars">{"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}</p>
                                <p className="price">{product.price}</p>
                                <button>Add to Cart</button>
                                <button className="adminA" onClick={() => editFuct(index)}>Edit</button>
                                <button className="adminB" onClick={() => console.log("Dont")}>Delete</button>

                                {editIndex === index && (
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={newProductData.name}
                                            onChange={changeFuct}
                                        />
                                        <input
                                            type="text"
                                            name="price"
                                            value={newProductData.price}
                                            onChange={changeFuct}
                                        />
                                        <input
                                            type="number"
                                            name="rating"
                                            value={newProductData.rating}
                                            onChange={changeFuct}
                                            min="1"
                                            max="5"
                                        />
                                        <input
                                            type="file"
                                            /*working on this*/
                                        />
                                        <button className="adminS" onClick={saveFuct}>Save</button>
                                    </div>
                                    )}
                            </div>
                        ))}
                    </div>
                </div>
            </>
    );
}


export default Products;