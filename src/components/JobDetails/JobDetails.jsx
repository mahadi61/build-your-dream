import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const { jobId } = useParams();
  const jobData = useLoaderData();
  const job = jobData.find((job) => job.id === Number(jobId));

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
          {job.educationalRequirements}
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
          <p className="flex mt-6">
            {" "}
            <img src="https://i.ibb.co/5rV8xQC/Frame.png" alt="" /> Salary:{" "}
            {job.salary}
          </p>
          <p className="flex">
            {" "}
            <img src="https://i.ibb.co/SwzBT51/Frame-1.png" alt="" /> Job Title
            : {job.jobTitle}
          </p>
          <h2 className="my-5 text-xl font-bold">Contact Information</h2>
          <hr className="border-black" />
          <p className="mt-6 flex">
            {" "}
            <img
              src="https://i.ibb.co/vzwwVN2/Frame-2.png"
              alt=""
            /> Phone: {job.phoneNumber}{" "}
          </p>
          <p className="flex">
            {" "}
            <img
              src="https://i.ibb.co/TbRXDPn/Frame-3.png"
              alt=""
            /> Email: {job.email}
          </p>
          <p className="flex">
            <img src="https://i.ibb.co/cLXSpS9/Frame-4.png" alt="" /> Address:{" "}
            {job.location}{" "}
          </p>
        </div>
        <button className="primary-btn w-48 px-7 py-5 font-bold	rounded-lg text-xl text-white mt-6">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
