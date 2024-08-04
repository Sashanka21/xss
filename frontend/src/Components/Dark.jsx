import React, { useState } from "react";
import useApiCall from "../Hooks/Apicall";
import { Drawer } from "antd";
import SocialMedia from "../Pages/SocialMedia";

const Dark = () => {
  const { data, loading, error } = useApiCall(
    "https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task"
  );
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();

  const showLargeDrawer = () => {
    setSize("large");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("API call error:", error);
    return <p>Error loading data.</p>;
  }

  const speaker = data.speakers?.find(speaker => speaker.heading === "Dark Knight") || {
    image: "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
    heading: "Dark Knight",
    sub_heading: "Batman",
    about: "Gotham",
  };

  return (
    <>
      <div className="border-2 flex w-[65%] rounded-lg pl-4 py-5 gap-5">
        <img
          src={speaker.image}
          alt="organiser_image_url"
          className="w-30 h-32"
          onClick={showLargeDrawer}
        />

        <Drawer onClose={onClose} open={open} size={size}>
          <div className="flex gap-4">
            <img
              src={speaker.image}
              alt="organiser_image_url"
              className="w-40 h-40"
            />
            <div className="flex flex-col gap-x-5">
              <div className="my-4">
                <h4 className="font-bold text-2xl">{speaker.heading}</h4>
                <p className="text-lg">{speaker.sub_heading}</p>
                <p className="text-lg">{speaker.about}</p>
              </div>
              <SocialMedia />
            </div>
          </div>
          <div className="mt-8">This is description for a speaker.</div>
        </Drawer>

        <div className="flex flex-col gap-x-5">
          <div>
            <h4 className="font-bold text-xl">{speaker.heading}</h4>
            <p>{speaker.sub_heading}</p>
            <p>{speaker.about}</p>
          </div>
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default Dark;
