import React, { Component } from "react";
import { CardItemList } from "../components";
import { cards } from "../static/cards.json";
import search from "../search.png";

const TabMenu = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [cardsList, setCardsList] = React.useState([]);

  React.useEffect(() => {
    setCardsList(cards);
  }, [cardsList]);

  return (
    <div>
      <div
        className="footer-tab"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <div className="add">+</div>
      </div>

      <div class="modal " id="staticBackdrop" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg ">
          <div class="modal-content">
            <div class="modal-body">
              <div className="col justify-content-between ">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="search"
                  />
                  <div class="">
                    <img src={search} alt="search" width="32" />
                  </div>
                </div>
                {console.log("cardsList", cardsList)}

                <div className="row m-0 p-0 layout-tab ">
                  {cardsList &&
                    cardsList.map((item) => (
                      <div className="col-12 mb-2">
                        <CardItemList
                          imageUrlHiRes={item.imageUrlHiRes}
                          name={item.name}
                          hp={item.hp}
                          id={item.id}
                          strength={item.strength}
                          weaknesses={item.weaknesses}
                          happiness={item.happiness}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabMenu;
