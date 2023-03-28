import { createStore, combineReducers, applyMiddleware } from "redux";
import { cardReducer } from "./reducers/card.reducer.js";
import logger from "redux-logger";



const allReducers = combineReducers({
  cartData: cardReducer,
});



export const store = createStore(allReducers, applyMiddleware(logger));