import { useNavigate } from "react-router-dom";
import "./projects.css";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="projects">
      <h2>Projects</h2>
      <main>
        <section>
          <div
            className="image-container"
            onClick={() => navigate("/project/bathroom")}
          >
            <img src="./images/bathroom2/IMG_4101.jpg" alt="" />
          </div>
          <div>
            <h3>Bathrooms</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              omnis amet, tenetur maxime molestias nisi sit earum dolore est
              nobis illo? Accusamus necessitatibus doloremque quo hic tempora
              accusantium perferendis quis!
            </p>
            <div
              className="image-container image-container-small"
              onClick={() => navigate("/project/bathroom")}
            >
              <img src="./images/bathroom2/IMG_4101.jpg" alt="" />
            </div>
            <button onClick={() => navigate("/project/bathroom")}>
              View All
            </button>
          </div>
        </section>

        <hr />

        <section>
          <div>
            <h3>Garages</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              omnis amet, tenetur maxime molestias nisi sit earum dolore est
              nobis illo? Accusamus necessitatibus doloremque quo hic tempora
              accusantium perferendis quis!
            </p>
            <div
              className="image-container image-container-small"
              onClick={() => navigate("/project/garage")}
            >
              <img src="./images/garage/IMG_4217.jpg" alt="" />
            </div>
            <button onClick={() => navigate("/project/garage")}>
              View All
            </button>
          </div>
          <div
            className="image-container"
            onClick={() => navigate("/project/garage")}
          >
            <img src="./images/garage/IMG_4217.jpg" alt="" />
          </div>
        </section>

        <hr />

        <section>
          <div
            className="image-container"
            onClick={() => navigate("/project/pavillion")}
          >
            <img src="./images/pavillion/Attachment.JPG" alt="" />
          </div>
          <div>
            <h3>Pavillion</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              omnis amet, tenetur maxime molestias nisi sit earum dolore est
              nobis illo? Accusamus necessitatibus doloremque quo hic tempora
              accusantium perferendis quis!
            </p>
            <div
              className="image-container image-container-small"
              onClick={() => navigate("/project/pavillion")}
            >
              <img src="./images/pavillion/Attachment.JPG" alt="" />
            </div>
            <button onClick={() => navigate("/project/pavillion")}>
              View All
            </button>
          </div>
        </section>

        <hr />

        <section>
          <div>
            <h3>Shower</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              omnis amet, tenetur maxime molestias nisi sit earum dolore est
              nobis illo? Accusamus necessitatibus doloremque quo hic tempora
              accusantium perferendis quis!
            </p>
            <div
              className="image-container image-container-small"
              onClick={() => navigate("/project/shower")}
            >
              <img src="./images/shower/IMG_3811.jpg" alt="" />
            </div>
            <button onClick={() => navigate("/project/shower")}>
              View All
            </button>
          </div>
          <div
            className="image-container"
            onClick={() => navigate("/project/shower")}
          >
            <img src="./images/shower/IMG_3811.jpg" alt="" />
          </div>
        </section>
      </main>
    </div>
  );
}
