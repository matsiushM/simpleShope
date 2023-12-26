import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from "./components/GlobalStyles";
import {BrowserRouter} from "react-router-dom";
import RootApp from "./components/RootApp";
import {Provider} from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store = {store}>
            <BrowserRouter>
                <GlobalStyle/>
                <RootApp/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

