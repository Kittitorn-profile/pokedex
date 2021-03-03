import React from "react";
import cute from "../cute.png";
import { Status } from "../components";

const handleAddItem = async (id) => {
  console.log("id", id);
};

const CardItem = (props) => {
  const { name, hp, id, imageUrlHiRes } = props;

  return (
    <div className="row card-item">
      <div className="col-3 p-0">
        <img className="w-100" src={imageUrlHiRes} alt="" />
      </div>
      <div className="col-9">
        <div className="row ">
          <div className="col-10" style={{ fontSize: 48 }}>
            {name}
          </div>
          <div
            className="col-2 text-center click"
            style={{ alignItems: "center" }}
            onClick={() => handleAddItem(id)}
          >
            <h3>add</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">HP</div>
          <div className="col-9">
            <Status status={hp} />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-3">STR</div>
          <div className="col-9">
            <Status status={props.hp} />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-3">WEAK</div>
          <div className="col-9">
            <Status status={props.hp} />
          </div>
        </div>
        <div className="row p-2">
          <img
            src={cute}
            className="p-0"
            style={{ width: "auto", height: 60, marginRight: 8 }}
            alt="smile"
          />
          <img
            src={cute}
            className="p-0"
            style={{ width: "auto", height: 60 }}
            alt="smile"
          />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
