import React from "react";

const CategorySection = ({ category, images }) => {
  return (
    <section>
      <p className="title">{category}</p>
      <div className="d-flex gallery">
        {images.map((url, i) => {
          return <img key={i} src={url} alt={category} />;
        })}
      </div>
    </section>
  );
};

export default CategorySection;
