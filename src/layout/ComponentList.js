import React, { Component } from "react";
// import ModalView from "./ModalView";
import { CardItem } from "../components";
import { cards } from "../static/cards.json";
import search from "../search.png";

const TabMenu = (props) => {
  const [cardsList, setCardsList] = React.useState([]);

  React.useEffect(() => {
    setCardsList(cards);
  }, [cardsList]);

  return (
    <div className="row m-0 p-0 layout-tab">
      {cardsList &&
        cardsList.map((item) => (
          <div className="col-6 mb-2">
            <CardItem
              imageUrlHiRes={item.imageUrlHiRes}
              name={item.name}
              hp={item.hp}
            />
          </div>
        ))}
    </div>
  );
};

export default TabMenu;
