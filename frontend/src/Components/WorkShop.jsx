import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import Third from "./Third";
import First from "./First";
import Second from "./Second";
import useApiCall from "../Hooks/Apicall";
import LoadingSkeleton from "../ShimmerEffect/LoadingSkeleton";

const WorkShop = ({data}) => {
  
  return (
    <>
      <h2 className=" uppercase text-2xl  font-bold">
        {data.workshop_section_title}
      </h2>
      <p
        className=" mt-4 "
        dangerouslySetInnerHTML={{ __html: data.workshop_section_description }}
      />
       <div className=" flex  my-20 gap-5">
        <First data={data}/>
        <Second data={data}/>
        <Third data={data}/>
       </div>
    </>
  );
};

export default WorkShop;
