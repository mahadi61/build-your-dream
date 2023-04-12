import React from "react";
import Job from "../Job/Job";
const AvailableJobs = ({ jobs }) => {
  return (
    <div>
      <section>
        <div className="text-center">
          <h3 className="text-4xl text-black mb-4 font-extrabold">
            Available Jobs
          </h3>
          <p>
            With all the information you require, explore countless job
            opportunities. Future belongs to you.
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-between mt-2 md:mt-7">
          {jobs.map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AvailableJobs;
