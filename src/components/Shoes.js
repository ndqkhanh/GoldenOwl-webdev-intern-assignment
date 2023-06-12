import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import React, { useState, useContext } from "react";
import "../assets/css/Shoes.css";
import { motion, useAnimationControls } from "framer-motion";
import { ShoesContext } from "../providers/ShoesProvider";

function Shoes({ id, image, name, description, price, color, quantity }) {
  const controls = useAnimationControls();
  const [isClicked, setIsClicked] = useState(false);
  const { allShoes, handleCartUpdate } = useContext(ShoesContext);

  const handleClick = async () => {
    await controls.start({
      width: "46px",
      transition: { ease: "easeInOut", duration: 0.1 },
    });
    setIsClicked(true);
  };

  const handleAddToCart = () => {
    const findShoes = allShoes.find((shoe) => shoe.id === id);
    if (findShoes.quantity > 0) return;
    if (handleCartUpdate(id, "add")) {
      handleClick();
    }
  };

  return (
    <div
      style={{
        padding: id === 1 ? "0 0" : "40px 0",
      }}
    >
      <Card sx={{ maxWidth: 345, borderRadius: "30px" }}>
        <div
          style={{
            height: "380px",
            width: "100%",
            backgroundColor: color,
          }}
        >
          <img
            style={{
              height: "304px",
              width: "304px",
              transform: "rotate(-24deg)",
            }}
            src={image}
            alt={name}
          />
        </div>
      </Card>

      <h1
        style={{
          fontSize: "20px",
          marginTop: "26px",
          marginBottom: "20px",
        }}
      >
        {name}
      </h1>
      <span
        style={{
          fontSize: "13px",
          color: "#777",
          lineHeight: "1.8",
        }}
      >
        {description}
      </span>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >{`$${price}`}</div>
        {quantity === 0 ? (
          <motion.div
            style={{
              height: "46px",
              borderRadius: "100px",
              overflow: "hidden",
              position: "relative",
            }}
            animate={controls}
          >
            <Button
              variant="contained"
              className="addToCart"
              style={{
                whiteSpace: "nowrap",
                height: "46px",
                width: "127px",
              }}
              onClick={handleAddToCart}
            >
              {!isClicked ? (
                <p>ADD TO CART</p>
              ) : (
                <img
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-250%, -50%)",
                    width: "20px",
                  }}
                  src="/images/check.png"
                  alt="check"
                />
              )}
            </Button>
          </motion.div>
        ) : (
          <div
            style={{
              height: "46px",
              width: "46px",
              borderRadius: "100px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Button
              variant="contained"
              className="addToCart"
              style={{
                whiteSpace: "nowrap",
                height: "46px",
                width: "127px",
              }}
              onClick={handleAddToCart}
            >
              <img
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-250%, -50%)",
                  width: "20px",
                }}
                src="/images/check.png"
                alt="check"
              />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shoes;
