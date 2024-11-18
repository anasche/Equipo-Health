import React, { useState, useEffect } from "react";
import style from "./PricingTable.module.scss";
import { Table } from "react-bootstrap";
import { features } from "./static";
import { FaCheckCircle } from "react-icons/fa";
import { fetchDocument } from "../../services/firebaseService";

const toggleValues = [
  { label: "Monthly", value: "rate_month" },
  { label: "Annual", value: "rate_year" },
];
function PricingTable() {
  const [billingCycle, setSelectedBillingCycle] = useState(
    toggleValues[0].value
  );

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturesData = async () => {
      try {
        // Fetch the document that contains the features
        const data = await fetchDocument("plans", "plans"); // Adjust the docId if necessary
        setData(data?.plans || []); // Assuming the document contains an array of features
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

  console.log(data, "plans");

  return (
    <section
      id="pricing"
      className={`${style.pricing_section} md:px-[140px] md:py-[16px] p-8`}
    >
      <div className={`${style.pricing_heading} flex-wrap`}>
        <h2 className="md:text-head2">Packages for your business</h2>
        <div className={style.billing_toggle_container}>
          <div className={style.toggle_buttons}>
            {toggleValues.map((v) => (
              <button
                key={v.value}
                className={`${style.toggle_button} ${
                  billingCycle === v.value ? style.active : ""
                }`}
                onClick={() => setSelectedBillingCycle(v.value)}
              >
                {v.label}
              </button>
            ))}
          </div>
          <span className="text-[12px] text-center py-2">
            Annual - <span className="text-primary-tw">2 months free 🎉</span>
          </span>
        </div>
      </div>
      <div className={style.feature_table}>
        <Table responsive>
          <thead>
            <tr>
              <th className="border-none"></th>
              {data.map((plan) => (
                <th key={plan.name}>{plan.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price</td>
              {data.map((plan) => (
                <td
                  className={`${style.table_price_box} !px-[20px] font-semibold`}
                >
                  <span className={"text-[48px]"}>
                    {plan.pricing[billingCycle]}$
                  </span>
                  /{billingCycle === "rate_month" ? "month" : "year"}
                </td>
              ))}
            </tr>
            {features.map((feature) => (
              <tr key={feature.slug}>
                <td className="text-nowrap">{feature.label}</td>
                {data.map((plan) => (
                  <td key={plan.name}>
                    {plan.features.some(
                      (planFeature) => planFeature === feature.slug
                    ) ? (
                      <FaCheckCircle className="mx-auto" />
                    ) : (
                      "-"
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
}

export default PricingTable;
