import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/index";
import Repository from "../Pages/Repository/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repository" element={<Repository />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
