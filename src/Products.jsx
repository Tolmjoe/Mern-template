function Products({name,price,image,description}) {
    return (
        <>

            <div className="box">
        <div className="product">
            <img src={image} alt={name}/>
            <div className="products-1">
                <h4>{name}</h4>
                <p>{price}</p>
                <p>{description}</p>
            </div>
        </div>
            </div>
        </>
    );
}


export default Products;