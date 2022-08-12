import { SIGNIN_GUEST, ADD_TO_CART, MENU_OPTION } from "./types";

export const signin_guest = (guest) => ({
  type: SIGNIN_GUEST,
  payload: guest,
});

export const add_to_cart = (items) => ({
  type: ADD_TO_CART,
  payload: items,
});

export const menu_option = (option) => ({
  type: MENU_OPTION,
  payload: option,
});
