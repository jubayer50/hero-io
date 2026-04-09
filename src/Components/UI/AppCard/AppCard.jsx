import React from "react";
import { FaStar } from "react-icons/fa";
import { GoDownload } from "react-icons/go";

const AppCard = ({ app }) => {
  console.log(app);
  return (
    <div className="bg-white p-4 rounded-sm space-y-4">
      <div className="flex justify-center items-center">
        <img className="rounded-lg max-w-full w-[50%]" src={app.image} alt="" />
      </div>

      <h2 className="text-[#001931] font-medium text-xl">{app.title}</h2>

      <div className="flex justify-between">
        <p className="bg-[#F1F5E8] text-[#00D390] py-1.5 px-2.5 rounded-sm font-medium flex items-center gap-2">
          {" "}
          <GoDownload className="text-[#00D390] text-2xl font-bold"></GoDownload>{" "}
          {app.downloads}
        </p>

        <p className="bg-[#FFF0E1] text-[#FF8811] py-1.5 px-2.5 rounded-sm font-medium flex items-center gap-2">
          {" "}
          <FaStar className="text-[#FF8811] text-2xl font-bold"></FaStar>{" "}
          {app.ratingAvg}
        </p>
      </div>
    </div>
  );
};

export default AppCard;

/**
 * 
 {
    "image": "https://i.pinimg.com/736x/c6/09/0d/c6090df18193e2616a6a32076883b70c.jpg",
    "title": "WhatsApp Messenger",
    "companyName": "WhatsApp LLC",
    "id": 1,
    "description": "WhatsApp Messenger is a free messaging app available for Android and other smartphones. WhatsApp uses your phone's Internet connection to let you message and call friends and family. Switch from SMS to WhatsApp to send and receive messages, calls, photos, videos, documents, and voice messages. Stay connected with people no matter where they are, safely and securely with end-to-end encryption.",
    "size": 80,
    "reviews": "172000K",
    "ratingAvg": 4.5,
    "downloads": "5000M",
    "ratings": [
        {
            "name": "1 star",
            "count": 1200000
        },
        {
            "name": "2 star",
            "count": 2400000
        },
        {
            "name": "3 star",
            "count": 8400000
        },
        {
            "name": "4 star",
            "count": 25000000
        },
        {
            "name": "5 star",
            "count": 136000000
        }
    ]
}
 */
