import { Route, Routes, BrowserRouter } from "react-router-dom";
import routes from "./routes";
import Home from "../views/Home";

const generateRoute = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        {routes?.map(({ pathname, element }) => (
          <Route path={pathname} element={element} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default generateRoute;
