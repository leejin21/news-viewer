import axios from "axios";
import React, { useState, useCallback } from "react";
import { Route } from "react-router-dom";

import NewsPages from "./pages/NewsPages";

const App = () => {
    return <Route path="/:category?" component={NewsPages}></Route>;
    // /:category? 와 같이 물음표가 있는 이유는 category 값이 선택적이기 때문
};

export default App;
