import React from "react";
import loding from "../assets/loding.gif";

const loder = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center bg-[#040404]">
      {/* <div className='iframe'>
  <iframe loading="lazy" className='iframe'
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFgzRQ1pxE&#x2F;view?embed" allowFullScreen="allowFullScreen" allow="fullscreen">
  </iframe>
</div> */}
      <img className="w-[50vh] " src={loding} alt="" />
    </div>
  );
};

export default loder;
