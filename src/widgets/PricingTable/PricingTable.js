import React from "react";
import "./PricingTable.css";

function PricingTable() {
  const plans = [
    {
      name: "Basic",
      price: "$20/month",
      features: [
        "Unlimited Transactions",
        "Multi Outlet",
        "Report Featured",
        "Inventory Management",
        "Direct report & team review",
      ],
      unavailable: ["Employee Management System", "CRM And Promotion Features", "Third Party Application Integration"],
      color: "lightgreen",
    },
    {
      name: "Business",
      price: "$30/month",
      bestChoice: true,
      features: [
        "Unlimited Transactions",
        "Multi Outlet",
        "Report Featured",
        "Inventory Management",
        "Direct report & team review",
        "Employee Management System",
      ],
      unavailable: ["CRM And Promotion Features", "Third Party Application Integration"],
      color: "lightblue",
    },
    {
      name: "Enterprise",
      price: "$50/month",
      features: [
        "Unlimited Transactions",
        "Multi Outlet",
        "Report Featured",
        "Inventory Management",
        "Direct report & team review",
        "Employee Management System",
        "CRM And Promotion Features",
        "Third Party Application Integration",
      ],
      color: "lavender",
    },
  ];

  return (
    <section className="pricing-section">
      <h2 className="pricing-heading">Packages for your business</h2>
      <div className="toggle-buttons">
        <button className="toggle-button">Monthly</button>
        <button className="toggle-button active">Annual</button>
        <p className="discount-text">Annual - 2 months free 🎉</p>
      </div>
      <div className="pricing-table">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-plan" style={{ backgroundColor: plan.color }}>
            {plan.bestChoice && <div className="best-choice">Best choice 😊</div>}
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="available">{feature} ✅</li>
              ))}
              {plan.unavailable?.map((feature, idx) => (
                <li key={idx} className="unavailable">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingTable;
