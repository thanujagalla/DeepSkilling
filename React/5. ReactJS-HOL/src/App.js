import React from "react";
import CohortDetails from "./CohortDetails";

function App() {

  const cohorts = [

    {
      cohortCode: "INTADMDF10",
      technology: ".NET FSD",
      startDate: "22-Feb-2022",
      currentStatus: "Ongoing",
      coach: "John",
      trainer: "David"
    },

    {
      cohortCode: "ADM21JF014",
      technology: "Java FSD",
      startDate: "10-Jan-2022",
      currentStatus: "Completed",
      coach: "Mary",
      trainer: "James"
    },

    {
      cohortCode: "REACT23",
      technology: "React",
      startDate: "05-Mar-2022",
      currentStatus: "Ongoing",
      coach: "Robert",
      trainer: "Smith"
    }

  ];

  return (

    <div>

      <h1>My Academy Dashboard</h1>

      {

        cohorts.map((cohort,index)=>

          <CohortDetails
            key={index}
            cohort={cohort}
          />

        )

      }

    </div>

  );

}

export default App;