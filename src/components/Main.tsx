import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSliders } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type DonationEvent = {
  id: number;
  title: string;
  endDate: string;
  location: string;
  description: string;
  imageUrl: string;
  category: string;
};

export default function Main() {
  const DonationEvents: DonationEvent[] = [
    {
      id: 1,
      title: "E-commerce Website Redesign",
      endDate: "2023-05-15",
      location: "John Doe",
      description:
        "Redesign and modernize our e-commerce platform to improve user experience, increase conversion rates, and enhance security.",
      imageUrl: "src/assets/ContactUs.png",
      category: "Tech",
    },
    {
      id: 2,
      title: "AI-Powered Chatbot Development",
      endDate: "2023-08-20",
      location: "Jane Smith",
      description:
        "Develop an AI-powered chatbot to provide instant customer support, answer inquiries, and streamline communication.",
      imageUrl: "src/assets/ContactUs.png",
      category: "Tech",
    },
    {
      id: 3,
      title: "Market Expansion Strategy",
      endDate: "2023-04-10",
      location: "Michael Johnson",
      description:
        "Develop a comprehensive strategy to expand our market presence in emerging economies, focusing on growth and profitability.",
      imageUrl: "src/assets/ContactUs.png",
      category: "Business",
    },
    {
      id: 4,
      title: "Financial Modeling and Forecasting",
      endDate: "2023-06-30",
      location: "Emily Brown",
      description:
        "Create financial models and forecasts to aid in decision-making, budgeting, and financial planning for the next fiscal year.",
      imageUrl: "src/assets/ContactUs.png",
      category: "Business",
    },
    {
      id: 5,
      title: "Bridge Rehabilitation Project",
      endDate: "2023-09-25",
      location: "David Wilson",
      description:
        "Rehabilitate an aging bridge to ensure structural integrity, safety, and longevity, incorporating modern engineering practices.",
      imageUrl: "src/assets/ContactUs.png",
      category: "Engineering",
    },
    {
      id: 6,
      title: "Advanced Robotics System Design",
      endDate: "2023-07-12",
      location: "Sophia Lee",
      description:
        "Design and develop advanced robotics systems for industrial automation, improving efficiency and reducing production costs.",
      imageUrl: "src/assets/ContactUs.png",
      category: "Engineering",
    },
    {
      id: 7,
      title: "Brand Identity Redesign",
      endDate: "2023-03-02",
      location: "Daniel Clark",
      description:
        "Redesign the brand identity, including logo, color scheme, and visual elements, to reflect our evolving brand image.",
      imageUrl: "src/assets/ContactUs.png",
      category: "Design",
    },
    {
      id: 8,
      title: "User Interface (UI) Redesign",
      endDate: "2023-10-15",
      location: "d",
      description:
        "Revamp the user interface of our mobile app to enhance user-friendliness, aesthetics, and overall user satisfaction.",
      imageUrl: "src/assets/ContactUs.png",
      category: "Design",
    },
  ];

  const navigateToDonationEventDetails = (DonationEventId: number) => {
    // console.log(`Navigate to details of project with id: ${projectId}`);
    window.location.href = "/ShowProjectPage";
  };

  // const [query, setQuery] = useState("");
  // const [selectedSort, setSelectedSort] = useState();
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#f7f7f7] pt-20 flex flex-col items-center min-h-screen font-roboto gap-12">
      <div className="flex flex-col items-center w-full gap-6">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="name"
            className="text-center block text-xl font-bold font-nunito text-[#bfa260]"
          >
            Search Projects
          </label>
          <div className="flex flex-row items-center gap-2">
            <div className="relative w-full">
              <input
                type="text"
                name="name"
                id="name"
                className="shadow-sm focus:ring-[#3e60a3] focus:border-[#3e60a3] block w-60 sm:w-80 md:w-96 h-12 text-base border-gray-300 pl-4 pr-14 rounded-full"
                placeholder="Project"
              />
              <a
                className="bg-[#5f7fbf] pt-2 pl-[10px] w-10 h-10 rounded-full absolute right-0 mr-1 -mt-11
              transition-all duration-700 hover:bg-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="text-[#f7f7f7]"
                />
              </a>
            </div>
            <div>
              <a
                className="w-10 h-10 px-2 py-2 rounded-full border-2 border-[#5f7fbf] transition-all duration-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 cursor-pointer shadow-md hover:shadow-xl"
                onClick={() => setOpen(true)}
              >
                <FontAwesomeIcon
                  icon={faSliders}
                  size="lg"
                  className="text-[#5f7fbf]"
                />
              </a>
            </div>
          </div>
          <a
            href="UploadProjectPage"
            className="flex select-none items-center cursor-pointer justify-center rounded-lg  bg-[#5f7fbf] border-2 border-[#5f7fbf] px-4 py-2 mt-3
                                    text-base font-bold text-white align-middle transition-all duration-700 hover:bg-[#3e60a3] hover:border-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:mt-0 sm:w-auto"
            type="button"
            data-ripple-dark="true"
            onClick={() => setOpen(false)}
          >
            Add Project
          </a>
        </div>

        {/* Projects Section */}
        <ul
          role="list"
          className="grid grid-cols-1 gap-8 mx-8 sm:gap-12 sm:mx-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {DonationEvents.map((DonationEvent) => (
            <li
              key={DonationEvent.id}
              onClick={() => navigateToDonationEventDetails(DonationEvent.id)}
              className="flex flex-col col-span-1 text-center transition duration-500 transform bg-white divide-y divide-gray-200 rounded-lg shadow cursor-pointer hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-col flex-1 p-8">
                <img
                  className="w-3/4 h-auto mx-auto rounded-lg"
                  src={DonationEvent.imageUrl}
                  alt={DonationEvent.title}
                />
                <h3 className="mt-6 text-[#bfa260] text-base font-nunito font-bold">
                  {DonationEvent.title}
                </h3>
                <dl className="flex flex-col justify-between flex-grow gap-3 mt-1">
                  <dt className="sr-only">location</dt>
                  <dd className="text-sm text-gray-500">
                    by{" "}
                    <em className="text-gray-600">{DonationEvent.location}</em>{" "}
                    on {DonationEvent.endDate}
                  </dd>
                  <dt className="sr-only">Description</dt>
                  <dd className="text-[#121212] text-sm line-clamp-2">
                    {DonationEvent.description}
                  </dd>
                  <dt className="sr-only">Category</dt>
                  <dd className="mt-1">
                    <span className="px-2 py-1 text-[#3e60a3] text-xs font-medium bg-blue-100 rounded-full">
                      {DonationEvent.category}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
