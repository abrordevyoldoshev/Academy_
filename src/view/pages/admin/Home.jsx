import React from "react";
import Charat from "../../../assets/sass/components/Charat";
const cardData = [
  {
    id: 1,
    title: "Revenue",
    number: "$2,454",
    data: "Compare to last year",
  },
  {
    id: 2,
    title: "Sales",
    number: "$6,982",
    data: "Compare to last year",
  },
  {
    id: 3,
    title: "Costs",
    number: "$8,310",
    data: "Compare to last year",
  },
];

const Default = () => {
  return (
    <section className="home-section">
      <div className="home">
        <div className="revenue-content">
          {cardData.map((data) => {
            const nowYear = new Date()
              console.log(nowYear)
            return (
              <div className="card">
                <h3>{data.title}</h3>
                <h1>{data.number}</h1>
                 <p >{data.data} {nowYear.getFullYear()}</p>
              </div>
            );
          })}
        </div>
        <Charat />
      </div>
    </section>
  );
};

export default Default;
