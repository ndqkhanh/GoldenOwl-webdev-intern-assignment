import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import "../assets/css/CartItem.css";
import { ShoesContext } from "../providers/ShoesProvider";

function CartItem({ id, image, name, price, color, quantity }) {
  const { handleCartUpdate, handleCartDelete } = useContext(ShoesContext);
  const [isShrinking, setIsShrinking] = useState(false);

  const handlePlus = () => {
    handleCartUpdate(id, "add");
  };

  const handleMinus = () => {
    if (quantity === 1) {
      setIsShrinking(true);
      setTimeout(() => {
        setIsShrinking(false);
        handleCartUpdate(id, "minus");
      }, 500);
    } else {
      handleCartUpdate(id, "minus");
    }
  };

  const handleDelete = () => {
    setIsShrinking(true);
  };

  return (
    <motion.div
      style={{
        display: "flex",
        position: "relative",
        alignItems: "center",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: isShrinking ? 0 : 1, scale: isShrinking ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (isShrinking) {
          handleCartDelete(id);
        }
      }}
    >
      <Grid container>
        <Grid item xs={5}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            style={{
              height: "100px",
              width: "100%",
              position: "relative",
            }}
          >
            <div
              style={{
                backgroundColor: color,
                borderRadius: "100px",
                height: "90px",
                width: "90px",
                position: "relative",
              }}
            >
              <img
                style={{
                  height: "126px",
                  width: "126px",
                  transform: "rotate(-28deg) translateY(-40px)",
                }}
                src={image}
                alt={name}
              />
            </div>
          </motion.div>
        </Grid>
        <Grid item xs={7}>
          <div
            style={{
              height: "100px",
              width: "100%",
            }}
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{
                  marginBottom: "10px",
                  fontSize: "13px",
                  lineHeight: 1.5,
                  fontWeight: 700,
                }}
              >
                {name}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
                style={{
                  marginBottom: "16px",
                  fontSize: "20px",
                  fontWeight: 700,
                }}
              >{`$${price}`}</motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <div className="button" onClick={() => handleMinus()}>
                    <img
                      style={{
                        height: "7px",
                        width: "7px",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                      src="/images/minus.png"
                      alt="minus"
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      width: "20px",
                      margin: "0 8px",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    {quantity}
                  </div>
                  <div className="button" onClick={() => handlePlus()}>
                    <img
                      style={{
                        height: "7px",
                        width: "7px",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                      src="/images/plus.png"
                      alt="plus"
                    />
                  </div>
                </div>
                <div className="trash" onClick={() => handleDelete()}>
                  <img
                    style={{
                      height: "16px",
                      width: "16px",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    src="/images/trash.png"
                    alt="trash"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default CartItem;
