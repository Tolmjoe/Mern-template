import "./Products.css"
import {useEffect, useState} from "react";


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

    const [electronicIndex, setElectronicIndex] = useState(1);
    const [clothesIndex, setClothesIndex] = useState(1);
    const [toysIndex, setToysIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setElectronicIndex((prev) => (prev + 1) % 3);
            setClothesIndex((prev) => (prev + 1) % 3);
            setToysIndex((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);


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
                            <div className="category-name"><h5>Electronics</h5></div>
                            <img
                                key={electronicIndex}
                                src={
                                ["/electron.jpeg", "/electron1.jpg", "/electron2.jpg"][electronicIndex]
                            } alt="Electronics" />
                        </div>

                        <div className="category-card">
                            <div className="category-name"><h5>Clothes</h5></div>
                            <img
                                key={clothesIndex}
                                src={
                                ["/clothes.jpeg", "/clothes1.jpg", "/clothes2.jpg"][clothesIndex]
                            } alt="Clothes" />
                        </div>

                        <div className="category-card">
                            <div className="category-name"><h5>Toys</h5></div>
                            <img
                                loading = "lazy"
                                key={toysIndex}
                                src={
                                ["/toys.jpeg", "/toys1.jpg", "/toys2.jpg"][toysIndex]
                            } alt="Toys" />
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