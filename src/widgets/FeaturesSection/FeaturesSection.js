import React from "react";
import "./FeaturesSection.css";

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
    <section className="features-section">
      <h2 className="features-heading">Complementary features for your business needs</h2>
      <div className="features-container">
        {features.map((feature) => (
          <div key={feature.id} className="feature-item">
            <div className="feature-image">
              <img src={feature.image} alt={feature.title} />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-buttons">
                <button className="launch-demo-button">Launch Demo</button>
                <button className="more-info-button">More Info</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
