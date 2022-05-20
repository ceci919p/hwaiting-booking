import { createContext, useState } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState({ tickets: [], campingSpot: {} });
  const value = { basket, setBasket };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};
