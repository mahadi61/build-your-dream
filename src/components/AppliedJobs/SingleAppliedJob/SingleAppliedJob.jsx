import React from "react";
import { Link } from "react-router-dom";

const SingleAppliedJob = ({ job }) => {
  const {
    id,
    jobTitle,
    companyName,
    logo,
    salary,
    location,
    jobType,
    employmentType,
  } = job;

  return (
    <div className="flex shadow-lg p-8 items-center justify-between">
      <div className="flex justify-between items-center gap-6">
        <div className="h-7 w-24">
          <img className="object-cover" src={logo} alt="" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">{jobTitle}</h3>
          <p className="text-slate-400">{companyName}</p>
          <p className="my-4 text-indigo-600">
            <span className="py-2 px-5 border-solid border-2 rounded-lg border-indigo-600">
              {jobType}
            </span>
            <span className="py-2 ms-4 px-5 border-solid rounded-lg	 border-2 border-indigo-600">
              {employmentType}
            </span>
          </p>
          <p className="text-slate-400 flex justify-start items-center">
            <img src="https://i.ibb.co/cLXSpS9/Frame-4.png" alt="" />
            {location} <img src="https://i.ibb.co/5rV8xQC/Frame.png" alt="" />
            {salary}
          </p>
        </div>
      </div>

      <Link to={`/${id}`}>
        <button className="primary-btn w-48 px-4 py-3 font-bold	rounded-lg text-xl text-white mt-6">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default SingleAppliedJob;
