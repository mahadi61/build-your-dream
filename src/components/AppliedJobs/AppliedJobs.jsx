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
  return (
    <div>
      {appliedList.map((job) => (
        <SingleAppliedJob key={job.id} job={job}></SingleAppliedJob>
      ))}
    </div>
  );
};

export default AppliedJobs;
