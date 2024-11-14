import React from "react";
import style from "./PricingTable.module.scss";

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
    <section className={style.pricing_section}>
      <h2 className={style.pricing_heading}>Packages for your business</h2>
      <div className={style.toggle_buttons}>
        <button className={style.toggle_button}>Monthly</button>
        <button className={`${style.toggle_button} ${style.active}`}>Annual</button>
        <p className={style.discount_text}>Annual - 2 months free 🎉</p>
      </div>
      <div className={style.pricing_table}>

        <div>jii</div>
        {plans?.map((plan, index) => (
          <div key={index} className={style.pricing_plan} style={{ backgroundColor: plan.color }}>
            {plan.bestChoice && <div className={style.best_choice}>Best choice 😊</div>}
            <h3 className={style.plan_name}>{plan.name}</h3>
            <p className={style.plan_price}>{plan.price}</p>
            <ul className={style.plan_features}>
              {plan?.features.map((feature, idx) => (
                <li key={idx} className={style.available}>{feature} ✅</li>
              ))}
              {plan?.unavailable?.map((feature, idx) => (
                <li key={idx} className={style.unavailable}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingTable;
