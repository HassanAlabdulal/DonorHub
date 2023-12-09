import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDollarSign } from "@fortawesome/free-solid-svg-icons";

interface NotificationType {
  id: number;
  type: string;
  from: string;
  date: string;
  isCompleted: boolean;
}

interface NotificationItemProps {
  notification: NotificationType;
  onAccept: (notification: NotificationType) => void;
  onPay: (notification: NotificationType) => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onAccept,
  onPay,
}) => {
  "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300";
  const payButtonClass =
    "px-7 py-2 bg-black text-white rounded hover:bg-gray-700 transition-colors duration-300";

  return (
    <tr className="border-b">
      <td className="px-5 py-3 text-center">{notification.type}</td>
      <td className="px-5 py-3 text-center">{notification.from}</td>
      <td className="px-5 py-3 text-center">{notification.date}</td>
      <td className="px-5 py-3">
        <div
          className="flex items-center justify-center"
          style={{ height: "50px" }}
        >
          {notification.isCompleted ? (
            <FontAwesomeIcon icon={faCheck} className="text-green-500 m-11" />
          ) : notification.type === "Request for Donate" ? (
            <button
              className={payButtonClass}
              onClick={() => onPay(notification)}
            >
              <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
              Pay
            </button>
          ) : (
            <button
              className={payButtonClass}
              onClick={() => onAccept(notification)}
            >
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Accept
            </button>
          )}
        </div>
      </td>
    </tr>
  );
};

export default function Notification() {
  const [notifications, setNotifications] = useState<NotificationType[]>([
    {
      id: 1,
      type: "Request for Recipient",
      from: "Hassan Alabdulal",
      date: "24/05/2023",
      isCompleted: false,
    },
    {
      id: 2,
      type: "Request for Donate",
      from: "Abdullah Al Matawah",
      date: "26/05/2023",
      isCompleted: false,
    },
  ]);

  const handleAccept = (notification: { id: number }) => {
    setNotifications((currentNotifications) =>
      currentNotifications.map((notif) =>
        notif.id === notification.id ? { ...notif, isCompleted: true } : notif
      )
    );
  };

  const handlePay = (notification: { id: number }) => {
    setNotifications((currentNotifications) =>
      currentNotifications.map((notif) =>
        notif.id === notification.id ? { ...notif, isCompleted: true } : notif
      )
    );
  };

  return (
    <div className="bg-[#f7f7f7] pt-16 flex flex-col items-center min-h-screen font-roboto">
      <div className="flex flex-col items-center w-full max-w-4xl p-8 space-y-8 overflow-hidden bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-900">
          Notification Center
        </h1>

        {/* Image */}
        <div className="flex justify-center w-full">
          <img
            src="src/assets/notification.gif"
            alt="Notification Center"
            className="w-1/2 h-1/2 max-xl:w-80 max-xl:h-80 max-lg:mt-24"
          />
        </div>

        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-5 py-3 text-center">Type</th>
              <th className="px-5 py-3 text-center">From</th>
              <th className="px-5 py-3 text-center">Date</th>
              <th className="px-5 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onAccept={handleAccept}
                onPay={handlePay}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
