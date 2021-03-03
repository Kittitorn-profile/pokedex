import React from "react";
import "./App.css";
import { CardItem, CardItemList } from "./components";
import { cards } from "../src/static/cards.json";
import search from "./search.png";
import { Header, TabMenu, ComponentList } from "../src/layout";

function App() {
  const [cardsList, setCardsList] = React.useState([]);

  React.useEffect(() => {
    setCardsList(cards);
  }, [cardsList]);

  return (
    <div className="App">
      <Header />
      <ComponentList />
      <TabMenu />
    </div>
  );
}

export default App;
