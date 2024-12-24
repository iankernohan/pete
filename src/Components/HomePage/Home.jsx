import "./home.css";
import RoofAndNameLogo from "../../Logos/RoofAndNameLogo";
import { useNavigate } from "react-router-dom";

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

      <section className="services">
        <h3>Things We Do</h3>

        <div className="services-content">
          <div>
            <h4>Bathrooms</h4>
            <div className="image-container">
              <img src="images/bathroom2/IMG_4100.jpg" alt="" />
            </div>
          </div>

          <div>
            <h4>Pavillions</h4>
            <div className="image-container">
              <img src="images/pavillion/Attachment.JPG" alt="" />
            </div>
          </div>

          <div>
            <h4>Garages</h4>
            <div className="image-container">
              <img src="images/garage/IMG_4217.jpg" alt="" />
            </div>
          </div>

          <div>
            <h4>Showers</h4>
            <div className="image-container">
              <img src="images/shower/IMG_3811.jpg" alt="" />
            </div>
          </div>
        </div>
        <button onClick={() => navigate("/projects")}>View All</button>
      </section>

      {/* <div className="image-container">
        <img src="images/pavillion/Attachment.JPG" alt="garage" />
      </div> */}
    </div>
  );
}
