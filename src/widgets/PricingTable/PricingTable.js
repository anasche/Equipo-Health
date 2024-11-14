import React, { useState, useEffect } from "react";
import style from "./PricingTable.module.scss";
import { Table } from "react-bootstrap";
import { features, plans } from "./static";
import { FaCheck, FaCheckCircle } from "react-icons/fa";

const toggleValues = [
  { label: "Monthly", value: "rate_month" },
  { label: "Annual", value: "rate_year" },
];
function PricingTable() {
  const [billingCycle, setSelectedBillingCycle] = useState(
    toggleValues[0].value
  );

  console.log(billingCycle, "selected palan");

  return (
    <section className={style.pricing_section}>
      <div className={style.pricing_heading}>
        <h2>Packages for your business</h2>
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
          <span>Annual - 2 months free 🎉</span>
        </div>
      </div>
      <div className={style.feature_table}>
        <Table>
          <thead>
            <tr>
              <th></th>
              {plans.map((plan) => (
                <th key={plan.name}>{plan.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price</td>
              {plans.map((plan) => (
                <td className={style.table_price_box}>
                  <span className={style.price}>
                    {plan.pricing[billingCycle]}$
                  </span>
                  /{billingCycle === "rate_month" ? "month" : "year"}
                </td>
              ))}
            </tr>
            {features.map((feature) => (
              <tr key={feature.slug}>
                <td>{feature.label}</td>
                {plans.map((plan) => (
                  <td key={plan.name}>
                    {plan.features.some(
                      (planFeature) => planFeature === feature.slug
                    ) ? (
                      <FaCheckCircle />
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
