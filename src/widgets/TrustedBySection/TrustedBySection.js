import React from "react";
import style from "./TrustedBySection.module.scss";

function TrustedBySection() {
  const brands = [
    { id: 1, name: "KFC", logo: "path-to-kfc-logo.png" },
    { id: 2, name: "Pizza Hut", logo: "path-to-pizza-hut-logo.png" },
    { id: 3, name: "McDonald's", logo: "path-to-mcdonalds-logo.png" },
    { id: 4, name: "Starbucks", logo: "path-to-starbucks-logo.png" },
    { id: 5, name: "Burger King", logo: "path-to-burger-king-logo.png" },
    { id: 6, name: "Paris", logo: "path-to-paris-logo.png" },
  ];

  return (
    <section className={style.trusted_by_section}>
      <h2 className={style.trusted_by_heading}>
        Trusted by over 50 thousand restaurants in 10+ countries
      </h2>
      <div className={style.brand_logos}>
        {brands.map((brand) => (
          <div key={brand.id} className="brand-logo">
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedBySection;
