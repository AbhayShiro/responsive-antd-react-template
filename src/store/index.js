import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loadingBarMiddleware } from "react-redux-loading-bar";
//composeWithDevTools must be removed during the production build
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

//Check the localstorage of this app. You will notice that redux state gets persisted with this key
const persistConfig = {
  key: "abhayshiro-antd",
  storage
};

const initialState = {};

export default () => {
  let store = createStore(
    persistReducer(persistConfig, rootReducer),
    initialState,
    applyMiddleware(
      loadingBarMiddleware({
        promiseTypeSuffixes: ["REQUEST", "SUCCESS", "FAILURE"]
      })
    )
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
