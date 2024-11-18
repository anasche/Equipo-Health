import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Form, InputGroup, Button, Spinner, Alert } from "react-bootstrap";
import styles from "./faq.module.scss";
import { fetchDocument } from "../../services/firebaseService";

const FAQ = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const faqData = await fetchDocument("faq", "faq");
        setData(faqData?.faq || []);
        setActiveCategory(faqData?.faq[0]?.id);
        setLoading(false);
      } catch (err) {
        setError("Error fetching FAQ data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={styles["faq-loading"]}>
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles["faq-error"]}>
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }

  return (
    <section
      className={`${styles["faq-section"]} py-12 px-4 m-4 md:m-8 md:py-[140px]`}
    >
      <div className="container">
        <div className="flex items-center flex-col md:flex-row md:mb-20">
          <h2 className={`${styles["faq-title"]} text-[25px] md:text-head2`}>
            Frequently Asked Questions
          </h2>

          <InputGroup className={`${styles["faq-search"]} my-2 `}>
            <Form.Control
              placeholder="Type your question here"
              aria-label="Search FAQs"
              className={`${styles["faq-search-input"]} py-[10px] md:h-[70px] md:!px-[30px] md:py-[23px] w-2/3 md:!text-[20px]`}
            />
            <Button
              variant="outline-secondary"
              className={`${styles["faq-search-btn"]} px-[14px] !py-[3px] right-[6px] top-[4px] !z-[10] md:right-[8px] md:top-[8px] md:h-[54px] md:!px-[24px] md:!py-[15px]`}
            >
              Search
            </Button>
          </InputGroup>
        </div>

        <div className={`${styles["faq-content"]} flex-col md:flex-row`}>
          {/* Categories */}
          <div
            className={`${styles["faq-categories"]} flex flex-row md:flex-col overflow-auto`}
          >
            {data.map((category) => (
              <Button
                key={category.id}
                className={`${styles["faq-category-btn"]} ${
                  activeCategory === category.id ? styles.active : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className={styles["faq-questions"]}>
            {data
              .filter((category) => category.id === activeCategory)
              .map((category) => (
                <Accordion key={category.id}>
                  {category.questions?.map((q) => (
                    <Accordion.Item eventKey={q.id} key={q.id}>
                      <Accordion.Header className="!text-sm !leading-8 md:text-lg">
                        {q.question}
                      </Accordion.Header>
                      <Accordion.Body>{q.answer}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
