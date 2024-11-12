import React from "react";
import style from "./FeaturesSection.module.scss";

function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "Dashboard to monitor your business sales from anywhere",
      description:
        "Dashboard provides in-depth insight into the performance menu items. You can see popular and unsold menus, helping you to monitor your restaurant business sales.",
      image: "path-to-dashboard-image.png",
    },
    {
      id: 2,
      title: "Easier and better Desk Management",
      description:
        "Desk management becomes smoother with interactive table visualizations. You can manage orders, allocate tables and maximize restaurant capacity.",
      image: "path-to-desk-management-image.png",
    },
    {
      id: 3,
      title: "More efficient customer recording and monitoring",
      description:
        "Monitor order records to tailor orders to customer preferences, such as options to add or remove ingredients for a more personalized experience and better service.",
      image: "path-to-customer-recording-image.png",
    },
  ];

  return (
    <section className={style.features_section}>
      <h2 className={style.features_heading}>
        Complementary features for your business needs
      </h2>
      <div className={style.features_container}>
        {features.map((feature) => (
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
    </section>
  );
}

export default FeaturesSection;
