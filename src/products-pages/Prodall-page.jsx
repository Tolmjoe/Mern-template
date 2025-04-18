import React from "react";
import { useParams } from "react-router-dom";
import "./prodall-page.css"

function Prodall() {
    const { id } = useParams();

    const products = [
        {
            id: 1,
            name: "Kafshy Parrot",
            image: "/ima2.avif",
            price: "₦34,982,798",
            rating: 5,
            discount: "-40%",
            description: "A beautiful parrot that will stay with you even when all leave you.",
            specifications: "Weight: 50kg, Height: 5cm",
            delivery: "Delivery in 1-2 business days",
            seller: "Birdeer Store",
            reviews: ["Perfect as a pet!", "Worth the price!"]
        },
        {
            id: 2,
            name: "Witch Flower",
            image: "/ima3.avif",
            price: "₦450,000",
            rating: 3,
            discount: "-15%",
            description: "Mystical flower that can be used for decorations and rituals. It was gotten from the blue mountians in the west of the forbidden land",
            specifications: "Material: Palyl, Length: 35cm",
            delivery: "Delivery in 2-9 business days",
            seller: "Mystical Daaj",
            reviews: ["Very powerful!", "Not as big as expected"]
        },
        {
            id: 3,
            name: "Tree of Life",
            image: "/ima4.avif",
            price: "₦240,789,897,782",
            rating: 4,
            discount: "-50%",
            description: "A tree that can grant you wishes.",
            specifications: "Material: Wood, Dimensions: 600x909cm",
            delivery: "Delivery in 20-30 business days",
            seller: "Nature Melem",
            reviews: ["So Huge!", "It destroyed my bedroom hehe"]
        },
        {
            id: 4,
            name: "Plastic Globe",
            image: "/ima5.avif",
            price: "₦5000",
            rating: 5,
            discount: "-80%",
            description: "Platsic educational globe showing all countries.",
            specifications: "Material: Plastic, Diameter: 40cm",
            delivery: "Delivery in 1-3 business days",
            seller: "Mamtoys ca.",
            reviews: ["Perfect for my kids!", "I loved getting this globe"]
        },
    ];

    const product = products.find((item) => item.id === parseInt(id));

    if (!product) return <div>Product not found.</div>;

    return (
        <div className="prodallBack">
            <div className="prodall-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="prodall-info">
                <h2>{product.name}</h2>
                <p className="pi-price">
                    {product.price} <span className="pi-discount">{product.discount}</span>
                </p>
                <p className="stars">{"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}</p>
                <p className="pi-description">{product.description}</p>
                <p className="specs"><strong>Specifications:</strong> {product.specifications}</p>
                <p className="delivery"><strong>Delivery:</strong> {product.delivery}</p>
                <p className="seller"><strong>Seller:</strong> {product.seller}</p>
                <div className="reviews">
                    <strong>Reviews:</strong>
                    <ul>
                        {product.reviews.map((review, index) => (
                            <li key={index}>"{review}"</li>
                        ))}
                    </ul>
                </div>
                <button className="cartButton">Add to Cart</button>
            </div>
        </div>
    );
}

export default Prodall;
