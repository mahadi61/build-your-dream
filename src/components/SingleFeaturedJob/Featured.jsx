import React from "react";
import { Link } from "react-router-dom";

const Featured = ({ singleJob }) => {
  const {
    id,
    logo,
    jobTitle,
    companyName,
    jobType,
    employmentType,
    location,
    salary,
  } = singleJob;
  return (
    <div className="shadow-md p-10 my-6">
      <img className="my-2" src={logo} alt="" />
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
        <img src="https://i.ibb.co/fQRFmnQ/Location-Icon.png" alt="" />
        {location} <img src="https://i.ibb.co/5rV8xQC/Frame.png" alt="" />
        {salary}
      </p>

      <Link to={`/${id}`}>
        <button className="mb-auto primary-btn w-48 px-7 py-5 font-bold	rounded-lg text-xl text-white mt-6">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Featured;
