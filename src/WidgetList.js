// src/WidgetList.js
import React, { useEffect, useState } from "react";
import { firestore } from "./firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function WidgetList() {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    // Define an async function to fetch data from Firestore
    const fetchData = async () => {
      try {
        const widgetsRef = collection(firestore, "widgets");
        const q = query(widgetsRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const widgetData = querySnapshot.docs?.map(doc => ({ id: doc.id, ...doc.data() }));
        setWidgets(widgetData);
      } catch (error) {
        console.error("Error fetching widgets:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Widget List</h2>
      <ul>
        {widgets?.map(widget => (
          <li key={widget.id}>
            <h3>{widget.name}</h3>
            <p>{widget.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetList;
