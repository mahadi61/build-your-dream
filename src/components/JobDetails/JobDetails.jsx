import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const { jobId } = useParams();
  const jobData = useLoaderData();

  const [job, setJob] = useState({});
  useEffect(() => {
    const jobDetails = jobData.find((job) => job.id);
    setJob(jobDetails);
  }, []);

  console.log(job);
  return (
    <div className="grid grid-cols-2 gap-x-6	mt-10">
      <div>
        <p className="text-xl font-bold text-gray-600 mb-5">
          <span className="text-xl text-black">Job Description: </span>
          {job.jobDescription}
        </p>
        <p className="text-xl font-bold text-gray-600 mb-5">
          <span className="text-xl text-black">Job Responsibility: </span>
          {job.jobResponsibility}
        </p>
        <p className="text-xl font-bold text-gray-600 mb-5">
          <span className="text-xl text-black">Educational Requirements: </span>
          Not find
        </p>
        <p className="text-xl font-bold text-gray-600 mb-5">
          <span className="text-xl text-black">Experiences: </span>
          {job.experience}
        </p>
      </div>

      <div className="">
        <div className="bg-gray-300 rounded-lg p-14">
          <h2 className="mb-5 text-xl font-bold">Job Details</h2>
          <hr className="border-black" />
          <p className="mt-6">Salary: {job.salary}</p>
          <p>Job Title : {job.jobTitle}</p>
          <h2 className="my-5 text-xl font-bold">Contact Information</h2>
          <hr className="border-black" />
          <p className="mt-6">Phone: {job.phoneNumber} </p>
          <p>Email: {job.email}</p>
          <p>Address: {job.location} </p>
        </div>
        <button className="primary-btn w-48 px-7 py-5 font-bold	rounded-lg text-xl text-white mt-6">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
