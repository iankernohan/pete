import "./home.css";
import RoofAndNameLogo from "../../Logos/RoofAndNameLogo";
import { useNavigate } from "react-router-dom";
import Project from "./Project";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="hero">
        <div className="background-image-container">
          <div className="shadow"></div>
          <img
            className="background-image"
            src="images/background-image.jpg"
            alt=""
          />
        </div>
        <section className="mission-statement">
          <RoofAndNameLogo width="100%" color="white" />
          <hr />
          <p>
            Elliott & Murray Builders is a full-service general contractor
            remodeling company proudly serving Oakland County.
          </p>
          <button onClick={() => navigate("/contact")}>Get Consultation</button>
        </section>
      </section>

      <section className="projects-home">
        <h3>Projects</h3>

        <div className="projects-home-content">
          <Project title="Kitchens" src="/pete/images/kitchen/0.JPG" />
          <Project title="Bathrooms" src="/pete/images/bathroom/0.JPG" />
          <Project
            title="Finished Basements"
            src="/pete/images/basement/0.JPG"
          />
          <Project title="Additions" src="/pete/images/addition/0.JPG" />
          <Project title="Garages" src="/pete/images/garage/0.JPG" />
          <Project title="Windows & Siding" src="/pete/images/windows/0.JPG" />
        </div>
        <button onClick={() => navigate("/projects")}>View All</button>
      </section>
    </div>
  );
}
