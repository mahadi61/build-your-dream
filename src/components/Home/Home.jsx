import React from "react";

const Home = () => {
  return (
    <div>
      {/* hero area start */}
      <section className="flex justify-between items-center h-screen bg-gray-400	">
        <div className="h-full">
          <h2 className="text-6xl font-bold mb-5">
            Find a Job and grow your <span>career</span>
          </h2>
          <p>
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
    </div>
  );
};

export default Home;
