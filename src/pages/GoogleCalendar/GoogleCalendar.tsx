import React, { useEffect, useState } from "react";
import axios from "axios";
import { gapi } from "gapi-script";

interface EventProps {
  calendarID: any;
  apiKey: any;
}

interface getEvents {
  id?: any;
  summary?: any;
}

function GoogleCalendar() {
  const [events, setEvents] = useState<getEvents[]>([]);

  const calendarID = import.meta.env.VITE_CALENDAR_ID;
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const accessToken = import.meta.env.VITE_GOOGLE_ACCESS_TOKEN;

  const fetchDataEvents = () => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events/?key=${apiKey}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const { data } = res.data;
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchDataEvents();
  }, []);

  //   const getEvents = ({ calendarID, apiKey }: EventProps) => {
  //     function initiate() {
  //       gapi.client
  //         .init({ apiKey: apiKey })
  //         .then(function () {
  //           return gapi.client.request({
  //             path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events/?key=${apiKey}`
  //           });
  //         })
  //         .then(
  //           (response: any) => {
  //             let events = response.result.items;
  //             return events;
  //           },
  //           function (err: any) {
  //             return [false, err];
  //           }
  //         );
  //     }

  //     gapi.load("client", initiate);
  //   };

  //   useEffect(() => {
  //     const events: any = getEvents({ calendarID, apiKey });
  //     setEvents(events);
  //   }, []);

  //   return (
  //     <>
  //       <div className="App pt-4">
  //         <h1 className="text-2xl font-bold mb-4">
  //           React App with Google Calendar API!
  //         </h1>
  //         <ul>
  //           {events?.map((item) => (
  //             <li key={item.id}>{item.summary}</li>
  //           ))}
  //         </ul>
  //       </div>
  //     </>
  //   );
  // }
}
export default GoogleCalendar;
