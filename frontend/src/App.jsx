import React from "react";
import useApiCall from "./Hooks/Apicall";
import LoadingSkeleton from "./ShimmerEffect/LoadingSkeleton";
import Speckers from "./Components/Speckers";
import Icons from "./Components/Icons";
import WorkShop from "./Components/WorkShop";
import ErrorPage from "./Components/ErrorPage";
import List from "./CustomComponent/List";
import DOMPurify from "dompurify";
import EventTimer from "./Components/EventTimer";

function App() {
  const { data, loading, error } = useApiCall(
    "https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task"
  );
  console.log(data);
  if (loading) return <LoadingSkeleton />;
  if (error) {
    console.error("API call error:", error);
    return (
      <ErrorPage
        errorCode={error.response?.status}
        errorMessage={"Please check the API"}
      />
    );
  }

  return (
    <>
      <div className="flex justify-between items-center mx-14">
        <img
          src={data.navbar_icon}
          onError={(e) => {
            e.target.src = logo;
          }}
          loading="lazy"
          alt="navbar_icon"
        />
        <Icons string="login" width="20" height="20" />
      </div>

      <div className="flex mx-16 gap-10 overflow-y-auto">
        <div className="flex-[7] ">
          <img src={data.event_poster_url} alt="event_poster_url" />
          <div>
            <h1 className="text-lg font-medium mt-6">About Events</h1>
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
            <style jsx>{`
              .custom-table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
                font-size: 1em;
                font-family: Arial, sans-serif;
                border-radius: 5px 5px 0 0;
                overflow: hidden;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
              }
              .custom-table thead tr {
                background-color: #009879;
                color: #ffffff;
                text-align: left;
                font-weight: bold;
              }
              .custom-table th,
              .custom-table td {
                padding: 12px 15px;
                border: 1px solid #dddddd;
              }
              .custom-table tbody tr {
                border-bottom: 1px solid #dddddd;
              }
              .custom-table tbody tr:nth-of-type(even) {
                background-color: #f3f3f3;
              }
             
            `}</style>
          </div>

          <div>
            <h1 className="text-2xl font-semibold">Tickets</h1>
            <List />
          </div>
          <Speckers data={data} />
          <WorkShop data={data} />
          <div className="uppercase text-2xl font-bold">
            {data.sponsor_section_title}
          </div>
          <div
            className="my-5 text-lg"
            dangerouslySetInnerHTML={{
              __html: data.sponsor_section_description,
            }}
          />
          <a href="https://konfhub.com/" target="blank">
            <img
              src="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=1920&q=75"
              alt="..."
              className="w-60 h-24 border-2 rounded-xl"
            />
          </a>

          <div>
            <h2 className="text-2xl font-bold mt-2.5 mb-4">
              SPONSOR <br></br> CATEGORY
            </h2>
            <a
              href="https://darkknight.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <hr className="w-1/2 ml-[150px] border border-[#efeaea] bg-[#306855] -mt-[53px] mb-[38px]" />

              <img
                src="https://dev-media.konfhub.com/sponsors/2024/June/10/1717977635909-75bb1d01-51a2-4af1-82cd-72d587192692.jpg"
                alt="Sponsor Category"
                className="w-full max-w-xs h-auto rounded-xl"
              />
            </a>
          </div>
        </div>

        <div className="block flex-[3] min-h-[100vh] !h-auto"  >
          <div className="sticky top-24">
          <div className=" border-2 border-gray-300 rounded-xl p-4 space-y-4">
            <div className="text-center">
              <h1 className="text-xl font-bold">{data.name}</h1>
            </div>
            <div className="flex  justify-between text-sm text-gray-700 ">
              <p className="flex items-center">
                <i aria-hidden="true" className="fa-solid fa-video mr-1"></i>
                Online
              </p>
              <p className="flex items-center ml-5">
                <i className="fa-solid fa-ticket ml-1"></i> Paid
              </p>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-base font-semibold mr-2">Event Live Link:</h1>
              <a
                href={data.event_live_link}
                className="text-lg font-bold text-blue-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Streaming Website
              </a>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold">Date</h3>
              <p className="text-sm">
                Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST
              </p>
            </div>
            <div>
              <EventTimer />
            </div>
          </div>

          <button className="w-full py-2 mt-6 text-xl font-semibold bg-black text-white rounded-md">
            Buy Now
          </button>
          <div className="mt-4 border-2 shadow-xl rounded-md border-black text-center">
            <a
              href={data.event_website}
              className="block py-2 text-xl font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Website
            </a>
          </div>

          <h3 className="text-xl font-semibold my-4">HOSTED BY</h3>
          <div className="border-2 rounded-lg my-4">
            <div className="flex gap-x-10 items-center mx-7 mt-5">
              <a href={data.organiser_website} target="blank">
                <img
                  src={data.organiser_image_url}
                  alt="organiser_image_url"
                  className="w-10 h-10 rounded-full"
                />
              </a>
              <h4 className="text-xl font-medium">{data.organiser_name}</h4>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: data.organiser_info }}
              className="mx-6 text-left mt-5"
            />

            <h3 className="text-lg mx-5 mt-3 font-semibold">Contact Us On</h3>
            <div className="flex gap-x-2 mx-6 my-5">
              <a href={data.organizer_facebook_url} target="blank">
                <img
                  src="https://dev.konfhub.com/img/facebook-share.svg"
                  alt="organizer_facebook_url"
                  className="w-8 h-8"
                />
              </a>
              <a href="https://twitter.com/konfhub" target="blank">
                <img
                  src="https://dev.konfhub.com/img/twitter-pro-black.svg"
                  alt="twitter"
                  className="w-8 h-8"
                />
              </a>
              <a href={data.organizer_linkedin_url} target="blank">
                <img
                  src="https://dev.konfhub.com/img/linkedin-share.svg"
                  alt="linkedin"
                  className="w-8 h-8"
                />
              </a>
              <a href="https://darkknight.in" target="blank">
                <img
                  src="https://dev.konfhub.com/img/website-black.svg"
                  alt="website"
                  className="w-8 h-8"
                />
              </a>

              <a href="mailto:manjunath@konfhub.com" target="blank">
                <img
                  src="https://dev.konfhub.com/img/mail-share.svg"
                  alt="mail"
                  className="w-8 h-8"
                />
              </a>
              <a href="tel:+919988776655" target="blank">
                <img
                  src="https://dev.konfhub.com/img/call-share.svg"
                  alt="phone"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="mx-20 mt-10 flex justify-center">
        <img src={data.ticket_footer_icon} alt="ticket_footer_icon" />
      </div>
    </>
  );
}

export default App;
