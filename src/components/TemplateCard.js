import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import React, { useContext, useMemo } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import "../assets/css/TemplateCard.css";
import { ShoesContext } from "../providers/ShoesProvider";
import CartItem from "./CartItem";
import Shoes from "./Shoes";

function TemplateCard({ isOurProducts }) {
  const { allShoes } = useContext(ShoesContext);

  const isCartExist = useMemo(() => {
    return allShoes.some((shoe) => shoe.quantity > 0);
  }, [allShoes]);

  const shoesWithQuantityMoreThanOne = useMemo(() => {
    const res = [];
    for (let i = 0; i < allShoes.length; i++) {
      if (allShoes[i].quantity > 0) {
        res.push(allShoes[i]);
      }
    }
    return res;
  }, [allShoes]);

  const totalPrice = useMemo(() => {
    return allShoes.reduce((acc, shoe) => {
      if (shoe.quantity > 0) {
        acc += shoe.price * shoe.quantity;
      }
      return acc;
    }, 0);
  }, [allShoes]);

  return (
    <Card className="cardContainer">
      <div className="circle"></div>
      <img className="nikeLogo" alt="Nike logo" src="/images/nike.png" />
      <div className="headerContainer">
        <Typography
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            position: "relative",
            marginBottom: "16px",
            zIndex: "1",
          }}
        >
          {isOurProducts ? "Our Products" : "Your cart"}
        </Typography>

        <Typography
          style={{
            fontSize: "24px",
            fontWeight: 700,
            position: "relative",
            marginBottom: "16px",
            zIndex: "1",
          }}
        >
          {!isOurProducts && `$${totalPrice.toFixed(2)}`}
        </Typography>
      </div>
      {isOurProducts ? (
        <div className="scroller">
          {allShoes.map((shoe) => (
            <Shoes
              key={shoe.id}
              id={shoe.id}
              image={shoe.image}
              name={shoe.name}
              description={shoe.description}
              price={shoe.price}
              color={shoe.color}
              quantity={shoe.quantity}
            />
          ))}
          {/* </PerfectScrollbar> */}
        </div>
      ) : isCartExist > 0 ? (
        <div className="scroller">
          {shoesWithQuantityMoreThanOne.map((shoe) => (
            <CartItem
              key={shoe.id}
              id={shoe.id}
              image={shoe.image}
              name={shoe.name}
              price={shoe.price}
              color={shoe.color}
              quantity={shoe.quantity}
            />
          ))}
          {/* </PerfectScrollbar> */}
        </div>
      ) : (
        <Typography
          style={{
            fontSize: "13px",
            position: "relative",
            marginBottom: "16px",
            zIndex: "1",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          Your cart is empty
        </Typography>
      )}
    </Card>
  );
}

export default TemplateCard;
