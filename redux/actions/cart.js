import {
  ADD_ITEM,
  REMOVE_ITEM,
  CHECKOUT,
  REMOVE_ALL_ITEMS,
} from "./actionTypes";

export const removeItemFromCart = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const checkoutCart = (order) => ({
  type: CHECKOUT,
  payload: order,
});

export const addItemToCart = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeAllItemsFromCart = () => ({
  type: REMOVE_ALL_ITEMS,
});