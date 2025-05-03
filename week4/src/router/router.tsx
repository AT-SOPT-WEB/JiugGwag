import { createBrowserRouter } from "react-router";
import PokemonDetail from "../page/poketmon-detail";
import Home from "../page/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon/:name",
    element: <PokemonDetail />,
  },
]);

export default router;
