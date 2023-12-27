import {Route, Routes} from "react-router-dom";
import React, {lazy, Suspense} from "react";
import {LinearProgress} from "@mui/material";

const ItemList = lazy(() => import('../ItemList'));
const BasketList = lazy(() => import('../BasketList'));

const Routing = () => {
    return (
        <Suspense fallback={<LinearProgress color="secondary"/>}>
            <Routes>
                <Route path='/' element={<ItemList/>}/>
                <Route path='/shoppingBasket' element={<BasketList/>}/>
            </Routes>
        </Suspense>
    )
}
export default Routing;