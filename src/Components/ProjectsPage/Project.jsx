import { useNavigate } from "react-router-dom";

export default function Project({
  title,
  src,
  nav,
  children,
  reverse = false,
}) {
  const navigate = useNavigate();

  return reverse ? (
    <section>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
        <div
          className="image-container image-container-small"
          onClick={() => navigate(`/project/${nav}`)}
        >
          <img src={src} alt={`${title} image`} />
        </div>
        <button onClick={() => navigate(`/project/${nav}`)}>View All</button>
      </div>
      <div
        className="image-container"
        onClick={() => navigate(`/project/${nav}`)}
      >
        <img src={src} alt={`${title} image`} />
      </div>
    </section>
  ) : (
    <section>
      <div
        className="image-container"
        onClick={() => navigate(`/project/${nav}`)}
      >
        <img src={src} alt={`${title} image`} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
        <div
          className="image-container image-container-small"
          onClick={() => navigate(`/project/${nav}`)}
        >
          <img src={src} alt={`${title} image`} />
        </div>
        <button onClick={() => navigate(`/project/${nav}`)}>View All</button>
      </div>
    </section>
  );
}
