import React from 'react'

const Card = ({ image, price, title, description }) => {
    function clickHandler(name) {
        alert(`Great!, you select an item  ${name}`)
    }
    return (
        <div style={{ border: "2px solid white", width: "250px", padding: "20px", borderRadius: "10px" }}>
            <img src={image} alt="" style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px"
            }} />
            <h2 style={{ color: "yellow" }}>{title}</h2>
            <h4>{price}</h4>
            <p>{description}</p>
            <button
                onClick={() => clickHandler(title)}
                style={{
                    padding: "10px 12px",
                    marginTop: "auto",
                    width: "100%",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}>Buy Now</button>
        </div>
    )
}

export default Card