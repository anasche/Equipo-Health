import React, { useEffect, useState } from "react";
import style from "./FeaturesSection.module.scss";
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

    // const addFeaturesData = async () => {
    //   const data= {
    //     title: "Manage your restaurant business so advanced",
    //     subtitle: "All the features you need in one App for any kind of your business 🚀",
    //     saleStatistic: {
    //           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    //           datasets: [
    //               {
    //                   label: 'Sales',
    //                   data: [800, 1200, 2500, 1500, 1600, 2431, 1200, 1000, 2300, 1500],
    //                   backgroundColor: 'rgba(66, 133, 244, 0.6)', // Light blue color similar to your chart
    //                   borderRadius: 10,
    //               },
    //           ],
    //     },
      
    //     reviewSection: {
    //       count:"4.9",
    //       title:"Reviews of some of our app restaurant industry companies."
    //     },
    //     totalPartner: {
    //       count:"50 thousands"
    //     },
    //     deliverSection: [
    //           {
    //             name: "Patrick Fernandes",
    //             review: "“Deliver a better customer experience and increase their operational efficiency.”",
    //             designation: 'CEO at Burger King',
    //             profileImage: "john-doe.jpg",
    //           },
    //           {
    //             name: "Jane Smith",
    //             review: "“Amazing features and great support team. My business has seen exponential growth!”",
    //             designation: 'CEO at Burger King',
    //             profileImage: "jane-smith.jpg",
    //           },
    //         ],
    //   }
        
      
    //     try {
    //       // Reference to Firestore document
    //       const docRef = doc(firestore, "banner", "banner");
      
    //       // Add data as an array to the Firestore document
    //       await setDoc(docRef, { banner: data });
      
    //       console.log("Features data added successfully!");
    //     } catch (error) {
    //       console.error("Error adding features data:", error);
    //     }
    //   };
    //   addFeaturesData()

  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;


  return (
    <section className={style.features_section}>
        <div className="container">
      <h2 className={`ttl-64 ${style.features_heading}`}>
        Complementary features for your business needs
      </h2>
      <div className={style.features_container}>
        {features?.map((feature) => (
          <div key={feature.id} className={style.feature_item}>
            <div className={style.feature_image}>
              <img src={feature.image} alt={feature.title} />
            </div>
            <div className={style.feature_content}>
              <h3 className={style.feature_title}>{feature.title}</h3>
              <p className={style.feature_description}>{feature.description}</p>
              <div className={style.feature_buttons}>
                <button className={style.launch_demo_button}>Launch Demo</button>
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
