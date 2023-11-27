import React from "react";
import loding from "../assets/loding.gif";

const Loder = () => {
  const timestamp = Date.now();

  return (
    <div className="h-[100vh] flex items-center justify-center bg-[#040404]">
      <img  className="w-[50vh]" src={`${loding}?ts=${timestamp}`} alt="Loading..." />
    </div>
  );
};

export default Loder;


// to prevent caching without generating a random string is by appending a timestamp as a query parameter to the URL. This method ensures the GIF is treated as a new resource every time without impacting performance significantly.

// In this version, the Date.now() function retrieves the current timestamp, which is appended as a query parameter (ts) to the GIF URL. This way, the browser considers the URL to be unique every time the component is rendered, preventing caching while maintaining performance without the need for generating a random string.

// This approach involves adding a timestamp or a random string as a query parameter to the image URL to prevent the browser from caching the image. This method ensures that the browser considers the image as a new resource each time, thereby loading it freshly from the server. However, it may slightly impact performance due to increased unique requests to the server.