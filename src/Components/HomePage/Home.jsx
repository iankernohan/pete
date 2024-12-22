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
        <div className="service-card">
          <div className="card-image">
            <img src="images/bathroom2/IMG_4100.jpg" alt="" />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            accusamus doloremque sit natus delectus voluptate eligendi suscipit
            modi incidunt temporibus, explicabo doloribus tenetur dignissimos
            corporis! Corrupti eius sunt a perspiciatis.
          </p>
        </div>

        <div className="service-card">
          <div className="card-image">
            <img src="images/pavillion/Attachment.JPG" alt="" />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            accusamus doloremque sit natus delectus voluptate eligendi suscipit
            modi incidunt temporibus, explicabo doloribus tenetur dignissimos
            corporis! Corrupti eius sunt a perspiciatis.
          </p>
        </div>

        <div className="service-card">
          <div className="card-image">
            <img src="images/garage/IMG_4217.jpg" alt="" />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            accusamus doloremque sit natus delectus voluptate eligendi suscipit
            modi incidunt temporibus, explicabo doloribus tenetur dignissimos
            corporis! Corrupti eius sunt a perspiciatis.
          </p>
        </div>
      </section>

      {/* <div className="image-container">
        <img src="images/pavillion/Attachment.JPG" alt="garage" />
      </div> */}
    </div>
  );
}
