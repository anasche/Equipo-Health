import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./EaseInHand.module.scss";
import { fetchDocument } from "../../services/firebaseService";

const EaseInHand = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the document that contains the features
        const data = await fetchDocument("ease_in_hand", "ease_in_hand"); // Adjust the docId if necessary
        setData(data?.ease_in_hand || []); // Assuming the document contains an array of features
        setLoading(false);
      } catch (err) {
        setError("Error fetching ease in section data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!data) {
    return <p>Loading...</p>; // Handle loading state

  }
  console.log(data,"gggggg")

  const { title, description, advantages, testimonials } = data;

  return (
    <section className={styles["ease-in-the-hand"]}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>

        <div className={styles.advantages}>
          {advantages.map((advantage) => (
            <div key={advantage.id} className={styles["advantage-item"]}>
              <img
                src={advantage.icon}
                alt={advantage.title}
                className={styles["advantage-icon"]}
              />
              <h4>{advantage.title}</h4>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.testimonials}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={styles["testimonial-card"]}
            style={{ backgroundColor: testimonial.backgroundColor }}
          >
            <p className={styles.quote}>{testimonial.quote}</p>
            <div className={styles.person}>
              <img
                src={testimonial.person.avatar}
                alt={testimonial.person.name}
                className={styles["person-avatar"]}
              />
              <div className={styles["person-info"]}>
                <h5>{testimonial.person.name}</h5>
                <p>{testimonial.person.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// EaseInHand.propTypes = {
//   data: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     advantages: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         title: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//         icon: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     testimonials: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         quote: PropTypes.string.isRequired,
//         person: PropTypes.shape({
//           name: PropTypes.string.isRequired,
//           position: PropTypes.string.isRequired,
//           avatar: PropTypes.string.isRequired,
//         }).isRequired,
//         backgroundColor: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//   }),
// };

export default EaseInHand;
