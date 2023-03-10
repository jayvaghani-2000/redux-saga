import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './styles.css';

const ImageGrid = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/?client_id=oJ9Xy7oJwaIKTGK8HzAYAyAVlrAH8NXM7v38Q75OK90&per_page=28`
    )
      .then((res) => res.json())
      .then((images) => {
        setImage(images);
      });
  }, []);
  return (
    <div className="content">
      <section className="grid">
        {image.map((image) => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(image.height / image.width)}`}
          >
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ImageGrid;
