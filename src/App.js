import axios from "axios";
import React, { useState, useCallback } from "react";
import { Route, Switch } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import NewsPages from "./pages/NewsPages";

import Header from "./components/Header";

const App = () => {
    return (
        <>
            <Header></Header>
            <Switch>
                {/* Switch로 단 하나의 라우트만 렌더링 적용 */}
                <Route path="/login" component={LoginPage}></Route>
                <Route path="/:category?" component={NewsPages}></Route>
            </Switch>
        </>
    );
    // /:category? 와 같이 물음표가 있는 이유는 category 값이 선택적이기 때문
};

export default App;
