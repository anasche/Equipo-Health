import React, { useEffect, useState } from "react";
import style from "./TrustedBySection.module.scss";
import { fetchDocument } from "../../services/firebaseService";

function TrustedBySection() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturesData = async () => {
      try {
        // Fetch the document that contains the features
        const data = await fetchDocument("trusted_by_section", "trusted"); // Adjust the docId if necessary
        setData(data?.trusted_by_section || []); // Assuming the document contains an array of features
        setLoading(false);
      } catch (err) {
        setError("Error fetching features data");
        setLoading(false);
      }
    };

    fetchFeaturesData();
  }, []);

  if (loading) return "";
  if (error) return <div>{error}</div>;

  return (
    <section className={style.trusted_by_section}>
      <h2 className={`${style.trusted_by_heading}`}>{data?.title}</h2>
      <div className={style.brand_logos}>
        {data?.brands?.map((brand) => (
          <div key={brand.id} className={style.logo_item}>
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedBySection;
