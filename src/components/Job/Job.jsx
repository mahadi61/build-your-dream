import React from "react";

const Job = ({ job }) => {
  const { jobTitle, imageLink, jobVacancy } = job;
  return (
    <div className="bg-gray-200 p-7 my-8 rounded-lg	">
      <div className="w-40 p-3">
        <img className="object-cover " src={imageLink} alt="" />
      </div>
      <h3 className="text-xl font-extrabold">{jobTitle}</h3>
      <p>{jobVacancy} Jobs Available</p>
    </div>
  );
};

export default Job;
