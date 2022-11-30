import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import "./assets/sass/main.scss";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import "react-pro-sidebar/dist/css/styles.css";
import {store, persistor} from "./redux/store/store";
import {PersistGate} from "redux-persist/integration/react";
import {ToastContainer} from "react-toastify";
import GetNameUser from "./service/getNameUser";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <PersistGate loadeing={null} persistor={persistor}>
            <BrowserRouter>
                <ToastContainer/>
                <App/>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
