import React, { useEffect, useState } from "react";
import style from "./featuresSection.module.scss";
import { fetchDocument } from "../../services/firebaseService";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase";

function FeaturesSection() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturesData = async () => {
      try {
        // Fetch the document that contains the features
        const data = await fetchDocument("features", "features"); // Adjust the docId if necessary
        setFeatures(data?.features || []); // Assuming the document contains an array of features
        setLoading(false);
      } catch (err) {
        setError("Error fetching features data");
        setLoading(false);
      }
    };

    fetchFeaturesData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section id="features" className={style.features_section}>
      <div className="container">
        <h2 className={`ttl-64 ${style.features_heading}`}>
          Complementary features for your business needs
        </h2>
        <div className={style.features_container}>
          {features?.map((feature, index) => (
            <div key={feature.id} className={style.feature_item}>
              <div
                className={`${style.feature_image} bg-[#00000033] ${
                  index % 2 !== 0 ? "md:order-2" : ""
                }`}
              >
                {/* <img src={feature.image} alt={feature.title} /> */}
              </div>
              <div className={style.feature_content}>
                <h3 className={style.feature_title}>{feature.title}</h3>
                <p className={style.feature_description}>
                  {feature.description}
                </p>
                <div className={style.feature_buttons}>
                  <button className={style.launch_demo_button}>
                    Launch Demo
                  </button>
                  <button className={style.more_info_button}>More Info</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
