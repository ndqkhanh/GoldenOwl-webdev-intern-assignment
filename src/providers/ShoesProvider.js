// ** React Imports
import { createContext, useEffect, useState } from "react";
import shoesData from "../assets/data/shoes.json";

// ** Create Context
export const ShoesContext = createContext({
  allShoes: [],
  setAllShoes: () => {},
  handleCartUpdate: () => {},
  handleCartDelete: () => {},
});

export const ShoesProvider = ({ children }) => {
  // ** State
  const [allShoes, setAllShoes] = useState([]);

  useEffect(() => {
    const shoes = JSON.parse(localStorage.getItem("shoes"));
    if (shoes) {
      setAllShoes(shoes);
    } else {
      localStorage.setItem("shoes", JSON.stringify(shoesData.shoes));
      const newJson = shoesData.shoes.map((shoe) => {
        return { ...shoe, quantity: 0 };
      });
      setAllShoes(newJson);
    }
  }, []);

  const handleCartUpdate = (id, type) => {
    const findShoes = allShoes.find((shoe) => shoe.id === id);
    if (findShoes.quantity === 0 && type === "minus") return false;
    if (type === "add") {
      findShoes.quantity += 1;
    } else {
      findShoes.quantity -= 1;
    }
    setAllShoes([...allShoes]);
    localStorage.setItem("shoes", JSON.stringify(allShoes));
    return true;
  };

  const handleCartDelete = (id) => {
    const findShoes = allShoes.find((shoe) => shoe.id === id);
    findShoes.quantity = 0;
    setAllShoes([...allShoes]);
    localStorage.setItem("shoes", JSON.stringify(allShoes));
  };

  if (!allShoes || allShoes.length === 0) return <></>;
  return (
    <ShoesContext.Provider
      value={{ allShoes, setAllShoes, handleCartUpdate, handleCartDelete }}
    >
      {children}
    </ShoesContext.Provider>
  );
};

export const ShoesConsumer = ShoesContext.Consumer;
