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
    //     const data = [
    //         {
    //           "id": "1",
    //           "name": "General",
    //           "questions": [
    //             {
    //               "id": "q1",
    //               "question": "What are the common features in the Coca POS system?",
    //               "answer": "Common features in a POS system include order management, payment integration, stock management, sales reporting, data analysis, table management (in restaurants), and customer support."
    //             },
    //             {
    //               "id": "q2",
    //               "question": "How does Coca POS help in managing stock?",
    //               "answer": "Coca POS helps track inventory in real-time, reduce stock wastage, and provide alerts for low inventory."
    //             }
    //           ]
    //         },
    //         {
    //           "id": "2",
    //           "name": "Transactions",
    //           "questions": [
    //             {
    //               "id": "q3",
    //               "question": "Can the Coca POS application be integrated with other systems?",
    //               "answer": "Yes, Coca POS can integrate with accounting, CRM, and ERP systems for seamless data synchronization."
    //             }
    //           ]
    //         },
    //         {
    //           "id": "3",
    //           "name": "Payment",
    //           "questions": [
    //             {
    //               "id": "q1",
    //               "question": "What are the common features in the Coca POS system?",
    //               "answer": "Common features in a POS system include order management, payment integration, stock management, sales reporting, data analysis, table management (in restaurants), and customer support."
    //             },
    //             {
    //               "id": "q2",
    //               "question": "How does Coca POS help in managing stock?",
    //               "answer": "Coca POS helps track inventory in real-time, reduce stock wastage, and provide alerts for low inventory."
    //             }
    //           ]
    //         },
    //         {
    //           "id": "4",
    //           "name": "Others",
    //           "questions": [
    //             {
    //               "id": "q3",
    //               "question": "Can the Coca POS application be integrated with other systems?",
    //               "answer": "Yes, Coca POS can integrate with accounting, CRM, and ERP systems for seamless data synchronization."
    //             }
    //           ]
    //         }
    //       ]
        
      
    //     try {
    //       // Reference to Firestore document
    //       const docRef = doc(firestore, "faq", "faq");
      
    //       // Add data as an array to the Firestore document
    //       await setDoc(docRef, { faq: data });
      
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
