import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../stylesheets/Products.css";

const product = [
    {
        id: 1,
        name: "Kafshy Parrot",
        image: "/public/images/ima2.avif",
        price: "\u20A6" + "34,982,798",
        rating: 5,
        discount: "-40%"
    },
    {
        id: 2,
        name: "Witch Flower",
        image: "/public/images/ima3.avif",
        price: "\u20A6" + "450,000",
        rating: 3,
        discount: "-15%"
    },
    {
        id: 3,
        name: "Tree of Life",
        image: "/public/images/ima4.avif",
        price: "\u20A6" + "240,789,897,782",
        rating: 4,
        discount: "-50%"
    },
    {
        id: 4,
        name: "Plastic Globe",
        image: "/public/images/ima5.avif",
        price: "\u20A6" + "5000",
        rating: 5,
        discount: "-80%"
    },
];

function Products() {
    const [products, setProducts] = useState(product);
    const [editIndex, setEditIndex] = useState(null);
    const [newProductData, setNewProductData] = useState({
        name: "",
        price: "",
        rating: "",
        image: "",
    });

    const editFuct = (index) => {
        const product = products[index];
        setEditIndex(index);
        setNewProductData({
            name: product.name,
            price: product.price,
            rating: product.rating,
            image: product.image,
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

    const slideImages = {
        electronics: ["/public/images/electron1.jpg", "/public/images/electron2.jpg", "/public/images/electron3.jpg"],
        clothes: ["/public/images/clothes1.jpg", "/public/images/clothes2.jpg", "/public/images/clothes3.jpg"],
        toys: ["/public/images/toys1.jpg", "/public/images/toys2.jpg", "/public/images/toys3.jpg"],
    };

    const setCarousel = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="body-prod">
            <div className="back-shop">
                <div className="back-text">
                    <h1>Welcome to Mern Store</h1>
                    <p>You can buy quality products ranging from clothes, electronics, toys, and more</p>
                </div>
            </div>

            <div className="categories">
                <div className="category-card">
                    <div className="category-name">
                        <h5>Electronics</h5>
                    </div>
                    <Slider {...setCarousel}>
                        {slideImages.electronics.map((image, index) => (
                            <div key={index}>
                                <img width="100%" height="280" src={image} alt="Electronics" />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="category-card">
                    <div className="category-name">
                        <h5>Clothes</h5>
                    </div>
                    <Slider {...setCarousel}>
                        {slideImages.clothes.map((image, index) => (
                            <div key={index}>
                                <img width="100%" height="280" src={image} alt="Clothes" />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="category-card">
                    <div className="category-name">
                        <h5>Toys</h5>
                    </div>
                    <Slider {...setCarousel}>
                        {slideImages.toys.map((image, index) => (
                            <div key={index}>
                                <img width="100%" height="280" src={image} alt="Toys" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <h5 className="productsHeading"> Latest Products</h5>
            <div className="products">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                       <Link to={`/product/${product.id}`}><img src={product.image} alt={product.name} />
                       </Link>
                        <h3>{product.name}</h3>
                        <p className="stars">
                            {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
                        </p>
                        <p className="price">{product.price}<span className="discount">{product.discount}</span></p>
                        <button>Add to Cart</button>
                        <button className="adminA" onClick={() => editFuct(index)}>
                            Edit
                        </button>
                        <button className="adminB" onClick={() => console.log("Dont")}>
                            Delete
                        </button>

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
                                <input type="file" />
                                <button className="adminS" onClick={saveFuct}>
                                    Save
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
