import React, { useEffect, useState } from "react";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import Job from "../Job/Job";
import Featured from "../SingleFeaturedJob/Featured";
const Home = () => {
  const jobs = useLoaderData();

  const [featuredJob, setFeaturedJob] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJob(data));
  }, []);

  return (
    <div>
      {/* hero area start */}
      <section className="flex justify-between items-center my-8">
        <div className="h-full">
          <h2 className="text-6xl font-bold mb-5">
            Find a Job and grow <span className="hero-text">your career</span>
          </h2>
          <p className="text-xl text-slate-400">
            A career opportunity is a position that offers the possibility to
            put training to use, pick up new skills, and have a real chance of
            advancement in the future.
          </p>
          <button className="primary-btn w-48 px-7 py-5 font-bold	rounded-lg text-xl text-white mt-6">
            Get Started
          </button>
        </div>
        <div className="h-full">
          <img
            className="w-full h-full"
            src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=900&t=st=1681153368~exp=1681153968~hmac=b0192beef5a779c7b892621a321febbf595cef727181987e4cf6578f9464904f"
            alt=""
          />
        </div>
      </section>
      {/* Available jobs */}

      <section>
        <div className="text-center">
          <h3 className="text-4xl text-black mb-4 font-extrabold">
            Available Jobs
          </h3>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="flex justify-between mt-7">
          {jobs.map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
      </section>

      {/* feature jobs */}
      <section>
        <div className="text-center">
          <h3 className="text-4xl text-black mb-4 font-extrabold">
            Featured Jobs
          </h3>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div>
          {featuredJob.map((singleJob) => (
            <Featured key={singleJob.id} singleJob={singleJob}></Featured>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
