import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

import BICampingSpots from "./BICampingSpots";
import BITicket from "./BITicket";
import Timer from "./Timer";

export default function Basket({ dataCamping, ticketData }) {
  const { basket } = useContext(BasketContext);

  const initialValue = 0;
  const sumWithInitial = basket.tickets.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.amount * currentValue.price,
    initialValue
  );

  return (
    <article className="basket">
      <div>
        <Timer></Timer>
        <ul>
          {basket.tickets.map((item) => {
            if (item.productType === "ticket") {
              return <BITicket key={item.id} {...item} />;
            } else if (item.productType === "camping") {
              return (
                <BICampingSpots key={item.area} {...item}></BICampingSpots>
              );
            }
            return item;
          })}
        </ul>
        <hr />
        <div className="totalprice">
          <p>Total:</p>
          <p className="basket-price"> {sumWithInitial} DKK</p>
        </div>
      </div>
    </article>
  );
}
