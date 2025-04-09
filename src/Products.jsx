import "./Products.css"

const categories = [
    { name: "Electronics", image: "src/assets/ima6.avif" },
    { name: "Clothes", image: "src/assets/ima6.avif" },
    { name: "Toys", image: "src/assets/ima6.avif" },
];

const products = [
    {
        name: "Kafshy Parrot",
        image: "src/assets/ima2.avif",
        price: "#34,982,798",
        rating: 5,
    },
    {
        name: "Witch Flower",
        image: "src/assets/ima3.avif",
        price: "#450,000",
        rating: 3,
    },
    {
        name: "Tree of Life",
        image: "src/assets/ima4.avif",
        price: "#240,789,897,782",
        rating: 4,
    },
    {
        name: "Plastic Globe",
        image: "src/assets/ima5.avif",
        price: "#509",
        rating: 5,
    },
];


function Products() {
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
                    {categories.map((cat, index) => (
                        <div key={index} className="category-card">
                            <img src={cat.image} alt={cat.name} />
                            <div className="category-name">{cat.name}</div>
                        </div>
                    ))}
                </div>


                <div className="products">
                    {products.map((product, index) => (
                        <div key={index} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p className="stars">{"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}</p>
                            <p className="price">{product.price}</p>
                            <button>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}


export default Products;