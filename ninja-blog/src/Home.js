import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import BlogsList from "./BlogList";

const Home = () => {
  const URL = "http://localhost:8000/blogs";
  
  const {data :blogs, isLoading, error} = useFetch(URL);


  return (
    <div className="Home">
      {error && <div>{ error }</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogsList blogs={blogs} title="new blogs :" />}
    </div>
  );
};

export default Home;
