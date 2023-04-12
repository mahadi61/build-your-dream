import React, { useState } from "react";
import { getShoppingCart } from "../../../public/fakedb";
import { useLoaderData } from "react-router-dom";
import SingleAppliedJob from "./SingleAppliedJob/SingleAppliedJob";

const AppliedJobs = () => {
  const jobList = useLoaderData();
  const job = getShoppingCart();
  const appliedList = [];

  for (const id in job) {
    const appliedJob = jobList.find((job) => job.id === Number(id));
    appliedList.push(appliedJob);
  }

  const [jType, setJobType] = useState("");
  const filteredJobs =
    jType.length > 0
      ? appliedList.filter((job) => job.jobType === jType)
      : appliedList;

  const handleChangeJobType = (jobType) => {
    setJobType((prev) => (prev !== jobType ? jobType : ""));
  };

  return (
    <div>
      <div className="">
        <div className="flex justify-between items-center  relative -mt-28 -z-10">
          <img
            className=" bottom-0 left-0"
            src="https://i.ibb.co/K60bF50/Vector.png"
            alt=""
          />
          <h2 className="text-2xl font-bold">Applied Jobs</h2>

          <img
            className="top-0 right-0"
            src="https://i.ibb.co/Tt8BFYN/Vector-1.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-end items-center gap-3 mt-14">
        <button
          onClick={() => handleChangeJobType("Remote")}
          className="hover:bg-blue-700 hover:text-white py-2 px-5 border-solid border-2 rounded-lg border-indigo-600"
        >
          Show Remote jobs
        </button>
        <button
          onClick={() => handleChangeJobType("Onsite")}
          className="hover:bg-blue-700 hover:text-white py-2 px-5 border-solid border-2 rounded-lg border-indigo-600"
        >
          Show Onsite jobs
        </button>
      </div>
      <div>
        {filteredJobs.map((job) => (
          <SingleAppliedJob key={job.id} job={job}></SingleAppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
