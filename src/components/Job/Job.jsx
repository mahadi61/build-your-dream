import React from "react";

const Job = ({ job }) => {
  const { jobTitle, imageLink, jobVacancy } = job;
  return (
    <div className="bg-white p-7 rounded-lg	">
      <div className="w-40 h-36">
        <img className="object-cover " src={imageLink} alt="" />
      </div>
      <h3 className="text-xl font-extrabold">{jobTitle}</h3>
      <p>{jobVacancy} Jobs Available</p>
    </div>
  );
};

export default Job;
