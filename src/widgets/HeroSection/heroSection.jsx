// src/components/HeroSection.js
import React, { useEffect, useState } from "react";
import HeroFirstSection from "../../components/HeroFirstSection/HeroFirstSection";
import SalesStatistics from "../../components/SalesStatistics/salesStatistics";
import RatingReview from "../../components/RatingReview/RatingReview";
import TotalPartner from "../../components/TotalPartner/TotalPartner";
import Testimonial from "../../components/Testimonial/testimonial";
import { fetchDocument } from "../../services/firebaseService";

function HeroSection() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the document that contains the features
        const data = await fetchDocument("banner", "banner"); // Adjust the docId if necessary
        setData(data?.banner || []); // Assuming the document contains an array of features
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

  if (!data) {
    return <p>\ ___</p>; // Handle loading state
  }

  return (
    <section className="m-2 md:m-8">
      <div className="grid grid-cols-3 grid-rows-4 md:grid-cols-6 md:grid-rows-3 gap-4">
        <div className="col-span-3 row-span-1 md:col-span-4 md:row-span-3">
          <HeroFirstSection data={data} />
        </div>
        <div className=" col-span-3 md:col-span-2">
          <SalesStatistics data={data?.saleStatistic} />
        </div>
        <div className="col-span-3 md:col-span-1">
          <RatingReview data={data?.reviewSection} />
        </div>
        <div className="col-span-3 md:col-span-1">
          <TotalPartner data={data?.totalPartner} />
        </div>
        <div className="col-span-3 md:col-span-2">
          <Testimonial data={data?.deliverSection} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
