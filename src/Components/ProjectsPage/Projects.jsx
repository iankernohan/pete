import "./projects.css";
import Project from "./Project";

export default function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <main>
        <Project
          title="Kitchens"
          src="/pete/images/kitchen/0.JPG"
          nav="kitchens"
        >
          Revitalize your kitchen with our expert remodeling services. We
          specialize in creating beautiful and functional spaces with custom
          cabinetry, modern layouts, updated lighting, and high-quality
          finishes. Our designs blend style and practicality to enhance both the
          look and usability of your kitchen.
        </Project>

        <hr />

        <Project
          title="Bathrooms"
          src="/pete/images/bathroom/0.JPG"
          nav="bathrooms"
          reverse={true}
        >
          Transform your bathroom into a relaxing retreat with our professional
          remodeling services. From modern fixtures and stylish vanities to
          custom tilework and efficient layouts, we create spaces that combine
          luxury and functionality.
        </Project>

        <hr />

        <Project
          title="Finished Basements"
          src="/pete/images/basement/0.JPG"
          nav="finished_basements"
        >
          Maximize your home’s potential with a finished basement designed for
          your lifestyle. Whether you’re looking for extra living space, a home
          office, or an entertainment area, we’ll create a comfortable and
          versatile environment tailored to your needs.
        </Project>

        <hr />

        <Project
          title="Additions"
          src="/pete/images/addition/0.JPG"
          nav="additions"
          reverse={true}
        >
          Expand your home with a custom addition that seamlessly blends with
          your existing space. From extra bedrooms and home offices to larger
          living areas, we deliver designs that enhance both your home’s
          functionality and value.
        </Project>

        <hr />

        <Project title="Garages" src="/pete/images/garage/0.JPG" nav="garages">
          Upgrade your garage with our professional remodeling and construction
          services. From storage solutions and workspaces to custom builds, we
          design garages that are practical, durable, and tailored to fit your
          needs.”
        </Project>

        <hr />

        <Project
          title="Windows & Siding"
          src="/pete/images/windows/0.JPG"
          nav="windows_and_siding"
          reverse={true}
        >
          Enhance your home’s curb appeal and energy efficiency with our window
          and siding services. We offer a variety of styles and materials to
          improve your home’s appearance, protect it from the elements, and
          reduce energy costs.
        </Project>
      </main>
    </div>
  );
}
