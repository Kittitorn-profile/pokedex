// import loadData from './api'
import axios from "axios";
import config from "../config";
import {
  DATA_LIST,
  DATA_ADD,
  ADD,
  REMOVE,
  OPEN,
  CLOSE,
  SEARCH_NAME,
  SEARCH_TYPE,
} from "../constants";

export const setStageName = (data) => {
  return {
    type: SEARCH_NAME,
    payload: data,
  };
};

export const setStageType = (data) => {
  return {
    type: SEARCH_TYPE,
    payload: data,
  };
};

export const setStageDataList = (data) => {
  return {
    type: OPEN,
    payload: data,
  };
};

export const isCloseModal = () => {
  return {
    type: CLOSE,
  };
};

export const setStageDataAddList = (data) => {
  return {
    type: DATA_ADD,
    payload: data,
  };
};

export const removeStageDataAddList = (data) => {
  return {
    type: REMOVE,
    payload: data,
  };
};

export const removeDataLis = (dataAdd, id) => {
  return (dispatch) => {
    let resDataAdd = dataAdd.filter((item) => item.id !== id);
    dispatch(removeStageDataAddList(resDataAdd));
  };
};

export const fetchData = (name, type, dataAdd, id) => {
  return (dispatch) => {
    let resDataList = [];
    let resDataAdd = dataAdd ? dataAdd : [];
    let searchName = name ? name : "";
    let searchType = type ? type : "";
    let resDamage1 = 0;
    let resDamage2 = 0;
    let resDamage = 0;
    dispatch(setStageName(searchName));
    dispatch(setStageType(searchType));
    axios
      .get(
        `${config.apiUrl}/api/cards?limit=20&name=${searchName}&type=${searchType}`
      )
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error : ", error);
      });
  };
};
