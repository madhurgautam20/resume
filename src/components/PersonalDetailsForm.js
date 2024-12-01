import React, { useState } from "react";
import Summary from "./Summary";
import EducationDetailsForm from "./EducationDetailsForm";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const PersonalDetailsForm = ({ formData, handleChange }) => {
  const [employmentHistory, setEmploymentHistory] = useState(
    formData.employmentHistory
  );

  const addEmployment = () => {
    setEmploymentHistory([
      ...employmentHistory,
      {
        id: employmentHistory.length,
        employer: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
      },
    ]);
  };

  const handleEmploymentChange = (e, index) => {
    const newEmploymentHistory = employmentHistory.map((item, i) =>
      i === index ? { ...item, [e.target.name]: e.target.value } : item
    );
    setEmploymentHistory(newEmploymentHistory);
    handleChange({
      target: { name: "employmentHistory", value: newEmploymentHistory },
    });
  };

  const handleDeleteEmployment = (index) => {
    const newEmploymentHistory = employmentHistory.filter(
      (_, i) => i !== index
    );
    setEmploymentHistory(newEmploymentHistory);
    handleChange({
      target: { name: "employmentHistory", value: newEmploymentHistory },
    });
  };

  const handleEducationChange = (e) => {
    handleChange(e);
  };

  const addEducation = () => {
    const newEducationHistory = [
      ...formData.educationHistory,
      {
        id: formData.educationHistory.length,
        schoolName: "",
        degree: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
      },
    ];
    handleChange({
      target: { name: "educationHistory", value: newEducationHistory },
    });
  };

  return (
    <form className="grid grid-cols-2 gap-6">
      <h4 className="font-bold col-span-2">Personal Details</h4>

      {/* Job Title */}
      <div className="col-span-2">
        <label
          htmlFor="jobtitle"
          className="block text-sm font-medium text-gray-600"
        >
          Job Title
        </label>
        <input
          id="jobtitle"
          type="text"
          name="jobtitle"
          value={formData.jobtitle}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border rounded-sm shadow-sm bg-slate-100"
          placeholder="Enter Job Title"
        />
      </div>

      {/* First Name */}
      <div>
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-600"
        >
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border rounded-sm shadow-sm bg-slate-100"
          placeholder="Enter First Name"
        />
      </div>

      {/* Last Name */}
      <div>
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-600"
        >
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border rounded-sm shadow-sm bg-slate-100"
          placeholder="Enter Last Name"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border rounded-sm shadow-sm bg-slate-100"
          placeholder="Enter Email"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-600"
        >
          Phone
        </label>
        <input
          id="phone"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border rounded-sm shadow-sm bg-slate-100"
          placeholder="Enter Phone Number"
        />
      </div>

      {/* Location */}
      <div className="col-span-2">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-600"
        >
          Location
        </label>
        <input
          id="location"
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border rounded-sm shadow-sm bg-slate-100"
          placeholder="Enter Location"
        />
      </div>

      {/* LinkedIn URL */}
      <div className="col-span-2">
        <label
          htmlFor="linkedin"
          className="block text-sm font-medium text-gray-600"
        >
          LinkedIn
        </label>
        <input
          id="linkedin"
          type="url"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border rounded-sm shadow-sm bg-slate-100"
          placeholder="Enter LinkedIn URL"
        />
      </div>

      <Summary />

      {/* Employment History */}
      <div className="col-span-2">
        <label
          htmlFor="experience"
          className="block text-2xl font-medium text-gray-900"
        >
          Employment History
        </label>
        <p className="text-xs mt-2 text-gray-600">
          Show your relevant experience.
        </p>

        <div className="w-full">
          {employmentHistory.map((employment, index) => (
            <div key={employment.id} className="mt-4 border rounded-md">
              <div className="flex justify-between items-center bg-slate-200 p-3">
                <h5 className="text-gray-800">
                  {employment.jobTitle
                    ? employment.jobTitle
                    : "(Not Specified)"}
                </h5>
                <DeleteForeverOutlinedIcon
                  onClick={() => handleDeleteEmployment(index)}
                  className="cursor-pointer text-slate-200 hover:text-gray-700 duration-300"
                />
              </div>
              <div className="flex">
                <div className="w-1/2 p-4">
                  <label
                    htmlFor={`employer-${index}`}
                    className="block text-sm font-medium text-gray-600"
                  >
                    Employer
                  </label>
                  <input
                    id={`employer-${index}`}
                    type="text"
                    name="employer"
                    value={employment.employer}
                    onChange={(e) => handleEmploymentChange(e, index)}
                    className="mt-1 p-2 block w-full border rounded-sm shadow-sm bg-slate-100"
                    placeholder="Enter Employer Name"
                  />
                </div>

                <div className="w-1/2 p-2">
                  <label
                    htmlFor={`jobTitle-${index}`}
                    className="block text-sm font-medium text-gray-600 mt-2"
                  >
                    Job Title
                  </label>
                  <input
                    id={`jobTitle-${index}`}
                    type="text"
                    name="jobTitle"
                    value={employment.jobTitle}
                    onChange={(e) => handleEmploymentChange(e, index)}
                    className="mt-1 p-2 block w-full border rounded-sm shadow-sm bg-slate-100"
                    placeholder="Enter Job Title"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="w-1/3 p-3">
                  <label
                    htmlFor={`startDate-${index}`}
                    className="block text-sm font-medium text-gray-600 mt-2"
                  >
                    Start Date
                  </label>
                  <input
                    id={`startDate-${index}`}
                    type="date"
                    name="startDate"
                    value={employment.startDate}
                    onChange={(e) => handleEmploymentChange(e, index)}
                    className="mt-1 p-2 block w-full border rounded-sm shadow-sm bg-slate-100"
                  />
                </div>
                <div className="w-1/3 p-3">
                  <label
                    htmlFor={`endDate-${index}`}
                    className="block text-sm font-medium text-gray-600 mt-2"
                  >
                    End Date
                  </label>
                  <input
                    id={`endDate-${index}`}
                    type="date"
                    name="endDate"
                    value={employment.endDate}
                    onChange={(e) => handleEmploymentChange(e, index)}
                    className="mt-1 p-2 block w-full border rounded-sm shadow-sm bg-slate-100"
                  />
                </div>
                <div className="w-1/3 p-3">
                  <label
                    htmlFor={`city-${index}`}
                    className="block text-sm font-medium text-gray-600 mt-2"
                  >
                    City
                  </label>
                  <input
                    id={`city-${index}`}
                    type="text"
                    name="city"
                    value={employment.city}
                    onChange={(e) => handleEmploymentChange(e, index)}
                    className="mt-1 p-2 block w-full border rounded-sm shadow-sm bg-slate-100"
                    placeholder="Enter City"
                  />
                </div>
              </div>
              <div className="p-3">
                <label
                  htmlFor={`description-${index}`}
                  className="block text-sm font-medium text-gray-600 mt-2"
                >
                  Description
                </label>
                <textarea
                  id={`description-${index}`}
                  name="description"
                  value={employment.description}
                  onChange={(e) => handleEmploymentChange(e, index)}
                  className="mt-1 p-2 block w-full border rounded-sm shadow-sm h-28"
                ></textarea>
              </div>
            </div>
          ))}
        </div>

        <p
          onClick={addEmployment}
          className="text-blue-600 mt-4 text-sm cursor-pointer"
        >
          + Add Employment
        </p>
      </div>

      {/* Education History */}
      <EducationDetailsForm
        formData={formData}
        handleEducationChange={handleEducationChange}
        addEducation={addEducation}
      />
    </form>
  );
};

export default PersonalDetailsForm;
