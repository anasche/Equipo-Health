import React, { useState, useEffect } from "react";
import style from "./PricingTable.module.scss";

function PricingTable() {
  const [selectedPlan, setSelectedPlan] = useState([]);
  const plans = {
    options: [
      {
        label: "Monthly",
        pricingPlans: [
          {
            name: "Basic",
            price: "$20/month",
            features: {
              "Unlimited Transactions": true,
              "Multi Outlet": true,
              "Report Featured": true,
              "Inventory Management": true,
              "Direct report & team review": true,
              "Employee Management System": false,
              "CRM And Promotion Features": false,
              "Third Party Application Integration": false,
            },
            color: "lightgreen",
          },
          {
            name: "Business",
            price: "$30/month",
            bestChoice: true,
            features: {
              "Unlimited Transactions": true,
              "Multi Outlet": true,
              "Report Featured": true,
              "Inventory Management": true,
              "Direct report & team review": true,
              "Employee Management System": true,
              "CRM And Promotion Features": false,
              "Third Party Application Integration": false,
            },
            color: "lightblue",
          },
          {
            name: "Enterprise",
            price: "$50/month",
            features: {
              "Unlimited Transactions": true,
              "Multi Outlet": true,
              "Report Featured": true,
              "Inventory Management": true,
              "Direct report & team review": true,
              "Employee Management System": true,
              "CRM And Promotion Features": true,
              "Third Party Application Integration": true,
            },
            color: "lavender",
          },
        ],
      },
      {
        label: "Annual",
        pricingPlans: [
          {
            name: "Basic",
            price: "$180/year",
            features: {
              "Unlimited Transactions": true,
              "Multi Outlet": false,
              "Report Featured": true,
              "Inventory Management": true,
              "Direct report & team review": false,
              "Employee Management System": false,
              "CRM And Promotion Features": false,
              "Third Party Application Integration": false,
            },
            color: "lightgreen",
          },
          {
            name: "Business",
            price: "$270/year",
            bestChoice: true,
            features: {
              "Unlimited Transactions": true,
              "Multi Outlet": true,
              "Report Featured": true,
              "Inventory Management": true,
              "Direct report & team review": true,
              "Employee Management System": true,
              "CRM And Promotion Features": true,
              "Third Party Application Integration": false,
            },
            color: "lightblue",
          },
          {
            name: "Enterprise",
            price: "$450/year",
            features: {
              "Unlimited Transactions": true,
              "Multi Outlet": true,
              "Report Featured": true,
              "Inventory Management": true,
              "Direct report & team review": true,
              "Employee Management System": true,
              "CRM And Promotion Features": true,
              "Third Party Application Integration": true,
            },
            color: "lavender",
          },
        ],
      },
    ],
    default: "Annual",
    discountText: "2 months free 🎉",
  };

  useEffect(() => {
    // Set default selected plan based on the "default" key
    const defaultOption = plans.options[0];
    if (defaultOption) setSelectedPlan(defaultOption.pricingPlans);
  }, []);
console.log(selectedPlan,"selected palan")
  return (
    <section className={style.pricing_section}>
      <h2 className={style.pricing_heading}>Packages for your business</h2>
      <div className={style.toggle_buttons}>
        {plans?.options?.map((value, id) => (
          <button
            key={id}
            className={`${style.toggle_button} ${
              selectedPlan?.label === value.label ? style.active : ""
            }`}
            onClick={() => setSelectedPlan(value.pricingPlans)}
          >
            {value.label}
          </button>
        ))}
        <p className={style.discount_text}>{plans.discountText}</p>
      </div>
      <div className={style.pricing_table}>
        {selectedPlan?.map((plan, index) => (
          <div
            key={index}
            className={style.pricing_plan}
            style={{ backgroundColor: plan.color }}
          >
            {plan.bestChoice && (
              <div className={style.best_choice}>Best choice 😊</div>
            )}
            <h3 className={style.plan_name}>{plan.name}</h3>
            <p className={style.plan_price}>{plan.price}</p>
            <ul className={style.plan_features}>
              {Object.entries(plan.features).map(([feature, available], idx) => (
                <li
                  key={idx}
                  className={available ? style.available : style.unavailable}
                >
                  {feature} {available ? "✅" : "❌"}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingTable;
