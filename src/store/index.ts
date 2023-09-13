import {
  Store,
  createStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import { IState } from "@types";

import { pokemonsReducer, pokemonTypesReducer } from "./reducers";

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemonTypes: pokemonTypesReducer,
});

const appliedMiddleware = applyMiddleware(thunk);
const middleware = composeWithDevTools(appliedMiddleware);

const store = createStore(rootReducer, middleware);

const makeStore = () => store;

export const wrapper = createWrapper<Store<IState>>(makeStore);
