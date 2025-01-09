import React from "react";
import Card from "./Card";

const App = () => {
  const personData = {
    name: "Misbahhhhhhhhhhhhhhhhhhhhhhhhh hbwuwu ww whbwd whswh",
    age: 22,
    city: "Karachi",
    isVerified: true
  };

  return (
    <div>
      <Card data={personData} />
    </div>
  );
};

export default App;
