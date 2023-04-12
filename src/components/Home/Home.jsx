import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link, useLoaderData } from "react-router-dom";
import Featured from "../SingleFeaturedJob/Featured";
import AvailableJobs from "../AvailableJobs/AvailableJobs";
const Home = () => {
  const featuredJob = useLoaderData();

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const [state, setState] = useState(false);
  const showAll = () => {
    setState(!state);
  };

  return (
    <div>
      {/* hero area start */}
      <section className="flex md:flex-row flex-col justify-between items-center my-8">
        <div className="h-full">
          <h2 className="md:text-6xl text-xl font-bold mb-5">
            Find a Job and grow <span className="hero-text">your career</span>
          </h2>
          <p className="text-xs text-slate-400">
            A career opportunity is a position that offers the possibility to
            put training to use, pick up new skills, and have a real chance of
            advancement in the future.
          </p>
          <Link to="/get-started">
            <button className="text-center primary-btn w-48 px-5 py-4 font-bold	rounded-lg text-xl text-white mt-6">
              Get Started
            </button>
          </Link>
        </div>
        <div className="h-full">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/bXbysTM/hero.png"
            alt=""
          />
        </div>
      </section>
      {/* Available jobs */}

      <AvailableJobs jobs={jobs}></AvailableJobs>

      {/* feature jobs */}
      <section>
        <div className="text-center">
          <h3 className="text-4xl text-black mb-4 font-extrabold">
            Featured Jobs
          </h3>
          <p>
            Discover tens of thousands of employment options with the necessary
            knowledge. This is your future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          {featuredJob
            .map((singleJob) => (
              <Featured key={singleJob.id} singleJob={singleJob}></Featured>
            ))
            .slice(0, state ? featuredJob.length : 4)}
          {/* slice(0, state ? state.length : 4) */}
        </div>

        <div className="flex flex-col justify-center items-center">
          <button
            onClick={showAll}
            className="primary-btn w-48 px-4 py-3 font-bold	rounded-lg text-xl text-white mt-6"
          >
            See All Jobs
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
