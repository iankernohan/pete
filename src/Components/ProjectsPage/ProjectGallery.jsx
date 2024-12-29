import { useState } from "react";
import { useParams } from "react-router-dom";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import Lightbox from "yet-another-react-lightbox";
import images from "./images";
import "yet-another-react-lightbox/styles.css";

export default function ProjectGallery() {
  const { name } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

  function openLightBox(index) {
    setIsOpen(true);
    setCurrIndex(index);
  }

  console.log(images[name][0].src);

  const upperCaseTitle =
    String(name).charAt(0).toUpperCase() + String(name).slice(1);

  return (
    <div className="gallery">
      <h2>{upperCaseTitle} Gallery</h2>
      <section>
        {images[name].map((img, idx) => (
          <div key={idx} className="image-container">
            <img
              src={img.src}
              alt={`${name} image`}
              onClick={() => openLightBox(idx)}
            />
          </div>
        ))}

        {isOpen && (
          <Lightbox
            plugins={[Zoom, Fullscreen]}
            zoom={{ maxZoomPixelRatio: 5, defaultZoom: 3 }}
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={images[name]}
            index={currIndex}
            onPrev={() =>
              setCurrIndex(
                (currIndex + images[name].length - 1) % images[name].length
              )
            }
            onNext={() => setCurrIndex((currIndex + 1) % images[name].length)}
            carousel={{ imageFit: "cover" }}
          />
        )}
      </section>
    </div>
  );
}
