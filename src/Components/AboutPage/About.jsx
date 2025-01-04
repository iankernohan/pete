import { useNavigate } from "react-router-dom";
import "./about.css";
import RoofLogo from "../../Logos/RoofLogo";

export default function About() {
  const navigate = useNavigate();

  // GET RID OF H@ AND TOP PADDING. BLUE ALL THE WAY
  return (
    <div className="about">
      {/* <h2>What We Do</h2> */}
      <div>
        <RoofLogo />
        <p className="first-p">
          Elliott & Murray Builders is a full-service general contractor
          remodeling company proudly serving Oakland County. Fully licensed and
          insured with over 50+ years of combined experience we are a design and
          build firm specializing in large and small projects including whole
          house remodels, kitchen remodels, bath remodels, finished basements,
          exterior roofs, windows, and siding.
        </p>
      </div>
      <section>
        <div>
          <img src="./images/woodworkingguy.jpg" alt="" />
        </div>
        <p className="last-p">
          Pete Elliott has been a finished trim carpenter for 30 years. He spent
          18 years in new construction builds and transitioned to specializing
          in remodeling in 2011 forming ECR Construction gaining experience in
          all aspects of remodeling. In 2016 Pete partnered with Randy Travis
          (Ramtra Remodeling). After Randy retired in 2023, Pete established a
          new partnership with Tim Murray to form Elliott & Murray Builders. Tim
          Murray started over 35 years ago in his family construction business.
          For the last 25+ years he has owned Hadley Construction focused on all
          aspects of exterior remodeling projects specializing in roofs, siding,
          and windows. Tim and Pete have the competence, experience, and
          communication skills to deliver your successful home project on time
          and on budget.
        </p>
      </section>
      <button onClick={() => navigate("/contact")}>Contact Us</button>
    </div>
  );
}
