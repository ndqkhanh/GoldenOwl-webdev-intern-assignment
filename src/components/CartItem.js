import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import React, { useState, useContext } from "react";
import "../assets/css/Shoes.css";
import { motion, useAnimationControls } from "framer-motion";
import { Grid } from "@mui/material";
import { ShoesContext } from "../providers/ShoesProvider";

function CartItem({ id, image, name, description, price, color, quantity }) {
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

  return (
    <Grid
      container
      spacing={3}
      style={{
        display: "flex",
        position: "relative",
        alignItems: "center",
      }}
    >
      <Grid item xs={5}>
        <div
          style={{
            backgroundColor: "yellow",
            height: "100px",
            width: "100%",
          }}
        ></div>
      </Grid>
      <Grid item xs={7}>
        {" "}
        <div
          style={{
            backgroundColor: "yellow",
            height: "100px",
            width: "100%",
          }}
        ></div>
      </Grid>
    </Grid>
  );
}

export default CartItem;
