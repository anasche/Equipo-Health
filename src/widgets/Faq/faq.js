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
    <div className={styles["faq-section"]}>
      <h2 className={styles["faq-title"]}>Frequently Asked Questions</h2>

      <InputGroup className={`mb-4 ${styles["faq-search"]}`}>
        <Form.Control
          placeholder="Type your question here"
          aria-label="Search FAQs"
          className={styles["faq-search-input"]}
        />
        <Button variant="outline-secondary" className={styles["faq-search-btn"]}>
          Search
        </Button>
      </InputGroup>

      <div className={styles["faq-content"]}>
        {/* Categories */}
        <div className={styles["faq-categories"]}>
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
                    <Accordion.Header>{q.question}</Accordion.Header>
                    <Accordion.Body>{q.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
