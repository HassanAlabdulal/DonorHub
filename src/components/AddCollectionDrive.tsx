import React, { useState } from "react";

export default function AddCollectionDrive() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const calculateEndDate = (months: number) => {
    const start = new Date(startDate);
    start.setMonth(start.getMonth() + months);
    return start.toISOString().split("T")[0];
  };

  const handleDurationChange = (months: number) => {
    if (startDate) {
      setEndDate(calculateEndDate(months));
    }
  };

  const handleStartDateChange = (date: React.SetStateAction<string>) => {
    setStartDate(date);
    // If a duration is already selected, calculate the end date again
    if (endDate) {
      const durationMonths = endDate === calculateEndDate(3) ? 3 : 6;
      setEndDate(calculateEndDate(durationMonths));
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Submit form data to server or state management
    console.log({ title, location, startDate, endDate });
    // Additional submission logic goes here
  };

  return (
    <div className="bg-[#f7f7f7] pt-16 flex flex-col items-center min-h-screen font-roboto">
      <div className="flex flex-col items-center w-full max-w-4xl p-8 space-y-8 overflow-hidden bg-white rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900">
          New Collection Drive
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label htmlFor="title" className="text-gray-700">
              Title:
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="text-gray-700">
              Location:
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="start-date" className="text-gray-700">
              Start Date:
            </label>
            <input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => handleStartDateChange(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm"
              required
            />
          </div>

          <fieldset className="mb-4">
            <legend className="text-gray-700">Duration:</legend>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="duration"
                  value="3 months"
                  id="duration-3months"
                  className="w-4 h-4 form-radio"
                  onChange={() => handleDurationChange(3)}
                />
                <label htmlFor="duration-3months" className="ml-2">
                  3 months
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  name="duration"
                  value="6 months"
                  id="duration-6months"
                  className="w-4 h-4 form-radio"
                  onChange={() => handleDurationChange(6)}
                />
                <label htmlFor="duration-6months" className="ml-2">
                  6 months
                </label>
              </div>
            </div>
          </fieldset>

          <div className="mb-4">
            <label htmlFor="end-date" className="text-gray-700">
              End Date:
            </label>
            <input
              id="end-date"
              type="date"
              value={endDate}
              className="w-full px-3 py-2 border rounded shadow-sm"
              disabled
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
