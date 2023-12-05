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
      title: "City Hall Blood Drive",
      endDate: "2023-05-20",
      location: "City Hall Auditorium",
      description:
        "Support our city's healthcare system by participating in the annual City Hall Blood Drive. Your donation matters!",
      imageUrl: "src/assets/Blood donation-.png",
      category: "Community",
    },
    {
      id: 2,
      title: "Healthcare Heroes Donation Campaign",
      endDate: "2023-06-12",
      location: "Local Hospital Conference Room",
      description:
        "Give back to those who care for us. Donate blood and support the healthcare heroes who save lives every day.",
      imageUrl: "src/assets/Blood donation-.png",
      category: "Health",
    },
    {
      id: 3,
      title: "Summer College Blood Drive",
      endDate: "2023-07-15",
      location: "University Commons Area",
      description:
        "Students and staff, show your college spirit and help save lives by donating blood this summer.",
      imageUrl: "src/assets/Blood donation-.png",
      category: "Education",
    },
    {
      id: 4,
      title: "Neighborhood Heroes Blood Drive",
      endDate: "2023-08-22",
      location: "Neighborhood Rec Center",
      description:
        "Join your neighbors in being a local hero! Your blood donation can save up to three lives.",
      imageUrl: "src/assets/Blood donation-.png",
      category: "Community",
    },
    {
      id: 5,
      title: "Corporate Giving Blood Drive",
      endDate: "2023-09-30",
      location: "Corporate HQ Courtyard",
      description:
        "Our company is hosting a blood drive to support local blood banks. Employees and the public are welcome!",
      imageUrl: "src/assets/Blood donation-.png",
      category: "Corporate",
    },
    {
      id: 6,
      title: "Athletes for Life Blood Drive",
      endDate: "2023-10-20",
      location: "City Sports Arena",
      description:
        "Athletes and fans, team up to save lives! Your donation is more than just blood; it's a lifeline.",
      imageUrl: "src/assets/Blood donation-.png",
      category: "Sports",
    },
    {
      id: 7,
      title: "Hometown Heroes Blood Drive",
      endDate: "2023-11-11",
      location: "Central Fire Station",
      description:
        "Join our first responders in a blood drive to help our community's hospitals. Every pint counts!",
      imageUrl: "src/assets/Blood donation-.png",
      category: "First Responders",
    },
    {
      id: 8,
      title: "Holiday Season Blood Drive",
      endDate: "2023-12-15",
      location: "Downtown Convention Center",
      description:
        "The gift of blood is the gift of life. During this season of giving, please consider donating blood to help those in need.",
      imageUrl: "src/assets/Blood donation-.png",
      category: "Seasonal",
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
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-[#c03838] py-10">
          Donation Events
        </h1>
        {/* <div className="flex flex-col gap-3">
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
        </div> */}

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
                <h3 className=" text-[#bfa260] text-base font-nunito font-bold">
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
