import React, { useState } from "react";
import Bruse from "./Bruse";
import Dark from "./Dark";
import { Button, Drawer } from "antd";
import SocialMedia from "../Pages/SocialMedia";

const Speckers = ({data}) => {
  

  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();


  const onClose = () => {
    setOpen(false);
  };

  const showLargeDrawer = () => {
    setSize("large");
    setOpen(true);
  };

  const speakers = data.speakers || [
    {
      id: 1,
      image:
        "https://dev-media.konfhub.com/past_events/2024/June/09/1717977208703-f9c5c15d-b0f1-4aeb-a492-3464c2c97afd.jpg",
      heading: "Bruce Wayne",
      sub_heading: "Chairman",
      about: "Wayne Enterprises",
    },
    {
      id: 2,
      image:
        "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
      heading: "Dark Knight",
      sub_heading: "Batman",
      about: "Gotham",
    },
  ];

  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold uppercase">
        {data.speaker_section_title}
      </h1>
      <p
        className="mt-4"
        dangerouslySetInnerHTML={{
          __html: data.speaker_section_description,
        }}
      />
      <div className="flex gap-4 mt-7">
        <Bruse />
        <Dark />
      </div>

      <div className="flex gap-4 mt-7">
        <div className="border-2 flex gap-5 rounded-lg w-[65%] pl-4 py-5">
          <img
            src={speakers[0].image}
            alt="organiser_image_url"
            className="w-30 h-32"
            onClick={showLargeDrawer}
          />
          <Drawer onClose={onClose} open={open} size={size}>
            <div className="flex gap-4">
              <img
                src={speakers[0].image}
                alt="organiser_image_url"
                className="w-40 h-40"
              />
              <div className="flex flex-col gap-x-5">
                <div className="my-4">
                  <h4 className="font-bold text-2xl">{speakers[0].heading}</h4>
                  <p className="text-lg">{speakers[0].sub_heading}</p>
                  <p className="text-lg">{speakers[0].about}</p>
                </div>
                <SocialMedia />
              </div>
            </div>
          </Drawer>

          <div className="flex flex-col gap-x-5">
            <div>
              <h4 className="font-bold text-xl">{speakers[0].heading}</h4>
              <p>{speakers[0].sub_heading}</p>
              <p>{speakers[0].about}</p>
            </div>
            <SocialMedia />
          </div>
        </div>

        <div className="border-2 flex gap-5 rounded-lg w-[65%] pl-4 py-5">
          <img
            src={speakers[1].image}
            alt="organiser_image_url"
            className="w-30 h-32"
            onClick={showLargeDrawer}
          />
          <Drawer onClose={onClose} open={open} size={size}>
            <div className="flex gap-4">
              <img
                src={speakers[1].image}
                alt="organiser_image_url"
                className="w-40 h-40"
              />
              <div className="flex flex-col gap-x-5">
                <div className="my-4">
                  <h4 className="font-bold text-2xl">{speakers[1].heading}</h4>
                  <p className="text-lg">{speakers[1].sub_heading}</p>
                  <p className="text-lg">{speakers[1].about}</p>
                </div>
                <SocialMedia />
              </div>
            </div>
          </Drawer>

          <div className="flex flex-col gap-x-5">
            <div>
              <h4 className="font-bold text-xl">{speakers[1].heading}</h4>
              <p>{speakers[1].sub_heading}</p>
              <p>{speakers[1].about}</p>
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speckers;
