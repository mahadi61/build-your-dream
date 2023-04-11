import React from "react";

const Featured = ({ singleJob }) => {
  const {
    logo,
    jobTitle,
    companyName,
    jobType,
    employmentType,
    location,
    salary,
  } = singleJob;
  return (
    <div>
      <img src={logo} alt="" />
    </div>
  );
};

export default Featured;
