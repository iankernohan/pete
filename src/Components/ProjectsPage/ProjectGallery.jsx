import { useParams } from "react-router-dom";

export default function ProjectGallery() {
  const images = {
    bathroom: [
      "bathroom/IMG_4343.jpg",
      "bathroom/IMG_4344.jpg",
      "bathroom/IMG_4345.jpg",
      "bathroom/IMG_4510.jpg",
      "bathroom2/IMG_4099.jpg",
      "bathroom2/IMG_4100.jpg",
      "bathroom2/IMG_4101.jpg",
      "bathroom2/IMG_4102.jpg",
      "bathroom2/IMG_4103.jpg",
      "bathroom3/IMG_4397.jpg",
      "bathroom3/IMG_4398.jpg",
      "bathroom3/IMG_4400.jpg",
      "bathroom3/IMG_4402.jpg",
    ],
    garage: ["garage/IMG_4186.jpg"],
    pavillion: ["pavillion/Attachment_1.JPG"],
    shower: ["shower/IMG_3811.jpg"],
  };

  const { name } = useParams();

  const upperCaseTitle =
    String(name).charAt(0).toUpperCase() + String(name).slice(1);

  return (
    <div className="gallery">
      <h2>{upperCaseTitle} Gallery</h2>
      <section>
        {images[name].map((img, idx) => (
          <div key={idx} className="image-container">
            <img src={`/images/${img}`} />
          </div>
        ))}
      </section>
    </div>
  );
}
