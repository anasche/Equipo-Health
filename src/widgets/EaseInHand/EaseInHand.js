import React, { useEffect, useState } from "react";
import styles from "./easeInHand.module.scss";
import { fetchDocument } from "../../services/firebaseService";
import { FaGear } from "react-icons/fa6";
import { BsShieldLockFill } from "react-icons/bs";
import { RiBox3Fill } from "react-icons/ri";
import { FaMoneyBill, FaServer } from "react-icons/fa";
import { DiGoogleAnalytics } from "react-icons/di";

const staticIcons = {
  1: <FaGear className="w-full h-full" />,
  2: <BsShieldLockFill className="w-full h-full" />,
  3: <RiBox3Fill className="w-full h-full" />,
  4: <FaServer className="w-full h-full" />,
  5: <FaMoneyBill className="w-full h-full" />,
  6: <DiGoogleAnalytics className="w-full h-full" />,
};

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

  if (loading) return "";
  if (error) return <div>{error}</div>;

  const { title, description, advantages, testimonials } = data;

  return (
    <section
      className={`${styles["ease-in-the-hand"]} p-8 md:px-[100px] flex flex-wrap md:space-x-14`}
    >
      <div className={`${styles.content} flex-1 `}>
        <h2 className="md:text-head2">{title}</h2>
        <p className="text-[18px] text-[#4D4E57]">{description}</p>

        <div className={styles.advantages}>
          {advantages.map((advantage, index) => (
            <div
              key={advantage.id}
              className={`${styles["advantage-item"]} md:p-6`}
            >
              {/* <img
                src={advantage.icon}
                alt={advantage.title}
                className={styles["advantage-icon"]}
              /> */}
              <div className="mb-3 sm:text-center">
                <div className="w-max p-4 bg-[#F8F9FD] rounded-full">
                  <div className="md:h-8 md:w-8 ">{staticIcons[index + 1]}</div>
                </div>
              </div>
              <h4>{advantage.title}</h4>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.testimonials} flex-1`}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={styles["testimonial-card"]}
            style={{
              backgroundColor: testimonial.backgroundColor,
              color: testimonial.textColor,
            }}
          >
            <p className={styles.quote}>"{testimonial.quote}"</p>
            <div className={styles.person}>
              {/* {testimonial.person.avatar ? (
                <img
                  src={testimonial.person.avatar}
                  alt={testimonial.person.name}
                  className={styles["person-avatar"]}
                />
              ) : ( */}
              <div
                className="h-[50px] w-[50px] rounded-full"
                style={{ backgroundColor: testimonial.textColor }}
              />
              {/* )} */}
              <div className={`${styles["person-info"]} flex flex-col `}>
                <h5>{testimonial.person.name}</h5>
                <span>{testimonial.person.position}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EaseInHand;
