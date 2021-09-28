import { CREATE, FETCH_BY_ID } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const createEntry = (entry) => async (dispatch) => {
  try {
    const { data } = await api.createEntry(entry);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getEntriesByUserId = (userId) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.getEntriesByUserId(userId);
    console.log(data);
    dispatch({ type: FETCH_BY_ID, payload: data });
  } catch (error) {
    console.log(error);
  }
};
