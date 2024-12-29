import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/HomePage/Home";
import Contact from "../Components/ContactPage/Contact";
import About from "../Components/AboutPage/About";
import Projects from "../Components/ProjectsPage/Projects";
import ProjectGallery from "../Components/ProjectsPage/ProjectGallery";

const router = createBrowserRouter(
  [
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
        {
          path: "/project/:name",
          element: <ProjectGallery />,
        },
      ],
    },
  ],
  {
    basename: "/pete/",
  }
);

export default router;
