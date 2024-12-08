import "./home.css";
import NameLogo from "../../Logos/NameLogo";

export default function Home() {
  return (
    <div className="home">
      <section className="mission-statement">
        <NameLogo width={500} color="black" />
        <p>
          Elliott & Murray Builders is a full-service general contractor
          remodeling company proudly serving Oakland County.
        </p>
      </section>

      <div className="image-container">
        <img src="images/pavillion/Attachment.JPG" alt="garage" />
      </div>
    </div>
  );
}
