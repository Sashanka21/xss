import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faMapMarkerAlt, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Tickets({ listdata1 = [], listdata2 = [], listdata3 = [] }) {
  const [list2, setList2] = useState(false);
  const [list3, setList3] = useState(true);

  const handlearrow = () => {
    setList2(!list2);
  };

  const handlearrow2 = () => {
    setList3(!list3);
  };

  return (
    <div className="m-12" id="tickets">
      {listdata1.map((item, index) => (
        <div key={index} className="shadow-md p-9 m-1 mb-10">
          <h3 className="text-xl font-semibold">{item.type}</h3>
          <p className="my-4 text-gray-700">{item.description}</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India"
            className="text-pink-800 font-bold text-lg"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            &nbsp; {item.location}
          </a>
          <h6 className="mt-2 text-lg font-medium">{item.subcontent}</h6>
          <h4 className="bg-gray-200 text-gray-800 mt-5 mb-3">{item.available}</h4>
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">{item.price}</h2>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">{item.btncontent}</button>
          </div>
        </div>
      ))}

      <div className="shadow-md p-9 m-1 mb-10">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">This is a category</h3>
          <button onClick={handlearrow} className="bg-transparent border-none outline-none cursor-pointer">
            <FontAwesomeIcon icon={list2 ? faChevronUp : faChevronDown} />
          </button>
        </div>
      </div>
      {list2 && (
        <h3 className="text-lg font-small text-gray-800 m-5">
          This is category description. This category is collapsed by default.
        </h3>
      )}
      {list2 &&
        listdata2.map((item, index) => (
          <div key={index} className="shadow-md p-9 m-1 mb-10">
            <h3 className="text-xl font-semibold">{item.type}</h3>
            <p className="my-4 text-gray-700">{item.description}</p>
            <h4 className="bg-gray-200 text-gray-800 mt-5 mb-3">{item.available}</h4>
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold">{item.price}</h2>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">{item.btncontent}</button>
            </div>
          </div>
        ))}

      <div className="shadow-md p-9 m-1 mb-10">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">
            This is also a category. But with a little longer name. Also note,
            this category expanded by default.
          </h3>
          <button onClick={handlearrow2} className="bg-transparent border-none outline-none cursor-pointer">
            <FontAwesomeIcon icon={list3 ? faChevronUp : faChevronDown} />
          </button>
        </div>
      </div>
      {list3 && (
        <h3 className="w-full max-w-3xl text-lg font-small text-gray-800 m-8 p-4 text-justify leading-relaxed">
          This is category description. This category is expanded by default.
          This is a little longer description. Adding more content to make the
          description look longer. Adding more content to make the description
          look longer. Adding more content to make the description look longer.
          Adding more content to make the description look longer. Adding more
          content to make the description look longer. Adding more content to
          make the description look longer.
        </h3>
      )}
      {list3 &&
        listdata3.map((item, index) => (
          <div key={index} className="shadow-md p-9 m-1 mb-10">
            <h3 className="text-xl font-semibold">{item.type}</h3>
            <p className="my-4 text-gray-700">{item.description}</p>
            <h4 className="bg-gray-200 text-gray-800 mt-5 mb-3">{item.available}</h4>
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold">{item.price}</h2>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">{item.btncontent}</button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Tickets;
