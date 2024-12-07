import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/HomePage/Home";
import Contact from "../Components/ContactPage/Contact";
import About from "../Components/AboutPage/About";
import Projects from "../Components/ProjectsPage/Projects";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

export default router;
