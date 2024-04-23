import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Repository from "../Pages/Repository";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route>
        <Routes />
      </Route>
    </BrowserRouter>
  );
};

export default Router;
