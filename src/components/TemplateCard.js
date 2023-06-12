import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import * as React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import shoesData from "../assets/data/shoes.json";
import Shoes from "./Shoes";
import "../assets/css/TemplateCard.css";

export default function TemplateCard({ isOurProducts }) {
  const [shoes, setShoes] = React.useState(shoesData);
  const [cart, setCart] = React.useState([]);
  return (
    <Card
      // sx={{
      //   width: "300px",
      //   height: "600px",
      //   borderRadius: "30px",
      //   overflow: "hidden",
      //   position: "relative",
      //   padding: "0 28px",
      // }}
      className="cardContainer"
    >
      <div
        className="circle"
        // style={{
        //   width: "300px",
        //   height: "300px",
        //   borderRadius: "100%",
        //   position: "absolute",
        //   backgroundColor: "#f6c90e",
        //   transform: "translate(-200px, -150px)",
        //   zIndex: "0",
        // }}
      ></div>
      <img className="nikeLogo" alt="Nike logo" src="/images/nike.png" />
      <div
        // style={{
        //   display: "flex",
        //   justifyContent: "space-between",
        //   alignItems: "center",
        // }}
        className="headerContainer"
      >
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
            fontWeight: "bold",
            position: "relative",
            marginBottom: "16px",
            zIndex: "1",
          }}
        >
          {!isOurProducts && `$0.00`}
        </Typography>
      </div>
      {isOurProducts ? (
        <div className="scroller">
          {shoes.shoes.map((shoe) => (
            <Shoes
              key={shoe.id}
              id={shoe.id}
              image={shoe.image}
              name={shoe.name}
              description={shoe.description}
              price={shoe.price}
              color={shoe.color}
            />
          ))}
          {/* </PerfectScrollbar> */}
        </div>
      ) : cart.length > 0 ? (
        <PerfectScrollbar
          style={{
            height: "502px",
            width: "100%",
            position: "relative",
            zIndex: "1",
          }}
        >
          {cart.map((shoe) => (
            <Shoes
              key={shoe.id}
              id={shoe.id}
              image={shoe.image}
              name={shoe.name}
              description={shoe.description}
              price={shoe.price}
              color={shoe.color}
            />
          ))}
        </PerfectScrollbar>
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
