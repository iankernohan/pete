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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero
          sequi expedita saepe a quaerat, totam harum, officia et nam laudantium
          tenetur consectetur alias voluptatum rerum asperiores voluptatem
          dolore eaque.
        </Project>

        <hr />

        <Project
          title="Bathrooms"
          src="/pete/images/bathroom/0.JPG"
          nav="bathrooms"
          reverse={true}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero
          sequi expedita saepe a quaerat, totam harum, officia et nam laudantium
          tenetur consectetur alias voluptatum rerum asperiores voluptatem
          dolore eaque.
        </Project>

        <hr />

        <Project
          title="Finished Basements"
          src="/pete/images/basement/0.JPG"
          nav="finished_basements"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero
          sequi expedita saepe a quaerat, totam harum, officia et nam laudantium
          tenetur consectetur alias voluptatum rerum asperiores voluptatem
          dolore eaque.
        </Project>

        <hr />

        <Project
          title="Additions"
          src="/pete/images/addition/0.JPG"
          nav="additions"
          reverse={true}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero
          sequi expedita saepe a quaerat, totam harum, officia et nam laudantium
          tenetur consectetur alias voluptatum rerum asperiores voluptatem
          dolore eaque.
        </Project>

        <hr />

        <Project title="Garages" src="/pete/images/garage/0.JPG" nav="garages">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero
          sequi expedita saepe a quaerat, totam harum, officia et nam laudantium
          tenetur consectetur alias voluptatum rerum asperiores voluptatem
          dolore eaque.
        </Project>

        <hr />

        <Project
          title="Windows & Siding"
          src="/pete/images/windows/0.JPG"
          nav="windows_and_siding"
          reverse={true}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero
          sequi expedita saepe a quaerat, totam harum, officia et nam laudantium
          tenetur consectetur alias voluptatum rerum asperiores voluptatem
          dolore eaque.
        </Project>
      </main>
    </div>
  );
}
