import React from "react";
import Card from "./Card";

const App = () => {
  const data = [
    {
      name: "Misbahhhhhhhhhhhhh",
      city: "Karachi",
      isVerified: true,
      isOrganisation: false,
    },
    {
      name: "Ali",
      city: "Lahore",
      isVerified: true,
      isOrganisation: false,
    },
    {
      name: "Fatima",
      city: "Islamabad",
      isVerified: true,
      isOrganisation: false,
    },
    {
      name: "Nedian Technologies",
      city: "Karachi",
      isVerified: true,
      isOrganisation: true,
    },
    {
      name: "Ayesha",
      city: "Peshawar",
      isVerified: false,
      isOrganisation: false,
    },
    {
      name: "John Doe",
      city: "New York",
      isVerified: true,
      isOrganisation: false,
    },
    {
      name: "TechCorp Solutions",
      city: "San Francisco",
      isVerified: true,
      isOrganisation: true,
    },
    {
      name: "Sara Khan",
      city: "Dubai",
      isVerified: true,
      isOrganisation: false,
    },
    {
      name: "SoftTech Innovations",
      city: "London",
      isVerified: true,
      isOrganisation: true,
    },
    {
      name: "Ahmed",
      city: "Karachi",
      isVerified: false,
      isOrganisation: false,
    },
    {
      name: "CloudFusion Technologies",
      city: "Toronto",
      isVerified: true,
      isOrganisation: true,
    },
    {
      name: "Rana",
      city: "Lahore",
      isVerified: true,
      isOrganisation: false,
    },
    {
      name: "GlobalTech Solutions",
      city: "Berlin",
      isVerified: false,
      isOrganisation: true,
    },
    {
      name: "United Nations",
      city: "Geneva",
      isVerified: true,
      isOrganisation: false,
      isGov: true, 
    },
    {
      name: "World Bank",
      city: "Washington DC",
      isVerified: true,
      isOrganisation: true,
      isGov: true, 
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", padding: "20px", justifyContent: "center" }}>
      {data.map((entity, index) => (
        <Card key={index} data={entity} />
      ))}
    </div>
  );
};

export default App;
