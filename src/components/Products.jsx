import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import DealsSlider from "../components/Deals-slider.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../stylesheets/Products.css";

// const hotDeals = ["/images/deals1.jpg", "/images/deals2.jpg", "/images/deals3.jpg"];
// const limitedStock = ["/images/deals4.jpg", "/images/deals5.jpg", "/images/deals6.jpg"];
// const flashSales = ["/images/deals7.jpg", "/images/deals8.jpg", "/images/deals9.jpg"];

const product = [
    {
        id: 1,
        name: "Kafshy Parrot",
        image: "/images/ima2.avif",
        price: "\u20A6" + "34,982,798",
        rating: 5,
        discount: "-40%"
    },
    {
        id: 2,
        name: "Witch Flower",
        image: "/images/ima3.avif",
        price: "\u20A6" + "450,000",
        rating: 3,
        discount: "-15%"
    },
    {
        id: 3,
        name: "Tree of Life",
        image: "/images/ima4.avif",
        price: "\u20A6" + "240,789,897,782",
        rating: 4,
        discount: "-50%"
    },
    {
        id: 4,
        name: "Plastic Globe",
        image: "/images/ima5.avif",
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
        electronics: ["../../images/electron1.jpg", "../../images/electron2.jpg", "../../images/electron3.jpg"],
        clothes: ["../../images/clothes1.jpg", "../../images/clothes2.jpg", "../../images/clothes3.jpg"],
        toys: ["../../images/toys1.jpg", "../../images/toys2.jpg", "../../images/toys3.jpg"],
        automobile: ["../../images/autom1.jpg", "../../images/autom2.jpg", "../../images/autom3.jpg"],
        // fruits: ["/images/fruits1.jpg", "/images/fruits3.jpg", "/images/fruits3.jpg"],
        // crystals: ["/images/crys1.jpg", "/images/crys2.jpg", "/images/crys3.jpg"]
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

                {/* <div className="category-card">
                    <div className="category-name">
                        <h5>Automobile</h5>
                    </div>
                    <Slider {...setCarousel}>
                        {slideImages.automobile.map((image, index) => (
                            <div key={index}>
                                <img width="100%" height="280" src={image} alt="Automobile" />
                            </div>
                        ))}
                    </Slider>
                </div> */}

                {/* <div className="category-card">
                    <div className="category-name">
                        <h5>Fruits</h5>
                    </div>
                    <Slider {...setCarousel}>
                        {slideImages.fruits.map((image, index) => (
                            <div key={index}>
                                <img width="100%" height="280" src={image} alt="Fruits" />
                            </div>
                        ))}
                    </Slider>
                </div> */}

                {/* <div className="category-card">
                    <div className="category-name">
                        <h5>Crystals</h5>
                    </div>
                    <Slider {...setCarousel}>
                        {slideImages.crystals.map((image, index) => (
                            <div key={index}>
                                <img width="100%" height="280" src={image} alt="Crystals" />
                            </div>
                        ))}
                    </Slider>
                </div> */}
            </div>



            {/* <DealsSlider title="🔥 Hot Deals" images={hotDeals} />
            <DealsSlider title="⚠️ Limited Stock" images={limitedStock} />
            <DealsSlider title="⚡ Flash Sale" images={flashSales} /> */}

            {/* <h5 className="productsHeading"> Latest Products</h5> */}
            {/* <div className="products">
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
            </div> */}
        </div>
    );
}

export default Products;
