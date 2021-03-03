import React from "react";
import cute from "../cute.png";

const renderHp = (value) => {
  console.log("value", value);
  return (
    <div class="progress" style={{ height: 16, borderRadius: 20 }}>
      <div
        class="progress-bar"
        role="progressbar"
        style={{ width: `${value}%` }}
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  );
};
const renderSTR = (value) => {
  console.log("value", value);
  return (
    <div class="progress" style={{ height: 16, borderRadius: 20 }}>
      <div
        class="progress-bar"
        role="progressbar"
        style={{ width: `${value}%` }}
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  );
};
const renderWEAK = (value) => {
  console.log("value", value);
  return (
    <div class="progress" style={{ height: 16, borderRadius: 20 }}>
      <div
        class="progress-bar"
        role="progressbar"
        style={{ width: `${value && value > 100 ? 100 : value}%` }}
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  );
};

const CardItem = (props) => {
  return (
    <div className="row card-item-list">
      <div className="col-4 p-0">
        <img className="w-100" src={props.imageUrlHiRes} alt="" />
      </div>
      <div className="col-8">
        <div className="row">
          <h4>{props.name}</h4>
        </div>
        <div className="row">
          <div className="col-3">HP</div>
          <div className="col-9">{renderHp(props.hp)}</div>
        </div>
        <div className="row mt-1">
          <div className="col-3">STR</div>
          <div className="col-9">{renderSTR(props.hp)}</div>
        </div>
        <div className="row mt-1">
          <div className="col-3">WEAK</div>
          <div className="col-9">{renderWEAK(props.hp)}</div>
        </div>
        <div className="row p-2">
          <img
            src={cute}
            className="p-0"
            style={{ width: "auto", height: 32, marginRight: 8 }}
            alt="smile"
          />
          <img
            src={cute}
            className="p-0"
            style={{ width: "auto", height: 32 }}
            alt="smile"
          />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
