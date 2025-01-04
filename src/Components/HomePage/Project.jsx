export default function Project({ title, src }) {
  return (
    <div className="project-home">
      <h4>{title}</h4>
      <div className="image-container">
        <img src={src} alt="" />
      </div>
    </div>
  );
}
