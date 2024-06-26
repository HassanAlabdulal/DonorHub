import React, { useState, useEffect } from "react";

export default function EditProfileAdmin() {
  // Provided user profile data
  const userProfile = {
    userId: "1112223334",
    name: "Abdullah Mohammed",
    email: "Abdullah2@gmail.com",
    phoneNumber: "557592000",
    bloodType: "A+",
    dateOfBirth: "1990-01-01",
    age: "33",
    weight: "70",
    address: "123 Main Street",
    medicalHistory: "None",
    otherMedicalHistory: "",
  };

  // State variables initialized with userProfile data
  const [userId, setUserId] = useState(userProfile.userId);
  const [name, setName] = useState(userProfile.name);
  const [email, setEmail] = useState(userProfile.email);
  const [phoneNumber, setPhoneNumber] = useState(userProfile.phoneNumber);
  const [bloodType, setBloodType] = useState(userProfile.bloodType);
  const [dateOfBirth, setDateOfBirth] = useState(userProfile.dateOfBirth);
  const [age, setAge] = useState<number>(parseInt(userProfile.age));
  const [weight, setWeight] = useState(userProfile.weight);
  const [address, setAddress] = useState(userProfile.address);
  const [medicalHistory, setMedicalHistory] = useState(
    userProfile.medicalHistory
  );
  const [otherMedicalHistory, setOtherMedicalHistory] = useState(
    userProfile.otherMedicalHistory
  );

  useEffect(() => {
    // Recalculate age whenever the date of birth changes
    const calculateAge = (dob: string | number | Date): number => {
      const today = new Date();
      const birthDate = new Date(dob);
      let age_now = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age_now--;
      }
      return age_now;
    };

    setAge(calculateAge(dateOfBirth));
  }, [dateOfBirth]);

  const getMaxDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const diseasesPreventingDonation = [
    "None",
    "Hepatitis B or C",
    "HIV/AIDS",
    "Heart Disease",
    "Hemochromatosis",
    "Blood Cancers",
    "Other",
  ];

  const handleNumericInputChange =
    (
      setterFunction: {
        (value: React.SetStateAction<string>): void;
        (value: React.SetStateAction<string>): void;
        (value: React.SetStateAction<string>): void;
        (arg0: any): void;
      },
      maxLength: number
    ) =>
    (event: { target: { value: any } }) => {
      const value = event.target.value;
      if (
        (value === "" || /^[0-9\b]+$/.test(value)) &&
        value.length <= maxLength
      ) {
        setterFunction(value);
      }
    };

  return (
    <div className="bg-[#f7f7f7] pt-16 flex flex-col justify-center w-full items-center min-h-screen font-roboto">
      <div className="flex flex-col items-center w-2/3 max-w-4xl p-8 space-y-8 overflow-hidden bg-white rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900">Edit Profile</h1>

        {/* Form for User Details */}
        <div className="w-full">
          <form className="space-y-4">
            {/* User ID */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="user-id"
              >
                User ID
              </label>
              <input
                className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-300 rounded-md"
                id="user-id"
                value={userId}
                onChange={handleNumericInputChange(setUserId, 10)}
                placeholder="User ID"
              />
            </div>

            {/* Combined Name Field */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-300 rounded-md"
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>

            {/* Email and Phone Number */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-300 rounded-md"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div className="flex-1">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="phone-number"
                >
                  Phone Number
                </label>
                <div className="flex mt-1 rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                    +966
                  </span>
                  <input
                    type="tel"
                    className="flex-1 block w-full px-3 py-2 text-gray-700 bg-gray-300 rounded-none rounded-r-md"
                    id="phone-number"
                    value={phoneNumber}
                    onChange={handleNumericInputChange(setPhoneNumber, 10)}
                    placeholder="5X XXX XXXX"
                  />
                </div>
              </div>
            </div>

            {/* Blood Type and Weight */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="blood-type"
                >
                  Blood Type
                </label>
                <select
                  id="blood-type"
                  className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-300 rounded-md"
                  value={bloodType}
                  onChange={(e) => setBloodType(e.target.value)}
                >
                  <option value="">Select Blood Type</option>
                  {bloodTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="weight"
                >
                  Weight (kg)
                </label>
                <input
                  className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-300 rounded-md"
                  id="weight"
                  type="text"
                  value={weight}
                  onChange={handleNumericInputChange(setWeight, 3)}
                  placeholder="Weight"
                />
              </div>
            </div>

            {/* Date of Birth and Age */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="date-of-birth"
                >
                  Date of Birth
                </label>
                <input
                  className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-300 rounded-md"
                  id="date-of-birth"
                  type="date"
                  max={getMaxDate()} // Prevent future dates
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="age"
                >
                  Age
                </label>
                <input
                  className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-300 rounded-md"
                  id="age"
                  type="text"
                  value={age}
                  disabled
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="address"
              >
                Address
              </label>
              <textarea
                className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-300 rounded-md resize-none"
                id="address"
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </div>

            {/* Medical History */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="medical-history"
              >
                Medical History
              </label>
              <select
                id="medical-history"
                className="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-300 rounded-md"
                value={medicalHistory}
                onChange={(e) => setMedicalHistory(e.target.value)}
              >
                {diseasesPreventingDonation.map((disease) => (
                  <option key={disease} value={disease}>
                    {disease}
                  </option>
                ))}
              </select>
              {medicalHistory === "Other" && (
                <textarea
                  className="block w-full px-3 py-2 mt-4 text-gray-700 bg-gray-300 rounded-md resize-none"
                  id="other-medical-history"
                  rows={3}
                  value={otherMedicalHistory}
                  onChange={(e) => setOtherMedicalHistory(e.target.value)}
                  placeholder="Please specify your medical condition"
                />
              )}
            </div>

            {/* Button Container */}
            <div className="flex items-center justify-center gap-4 ">
              {" "}
              {/* Flex container with column direction */}
              {/* Change Password Button */}
              <a
                type="button"
                className="bg-[#292828] text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-black transition-all duration-700 min-w-[120px]"
                href="NewPasswordPage"
              >
                Change Password
              </a>
              {/* Update Profile Button */}
              <a
                type="submit"
                className="bg-[#292828] text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-black transition-all duration-700 min-w-[170px] text-center"
                href="ShowProfilePage"
              >
                Save Changes
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
