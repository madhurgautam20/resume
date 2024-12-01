import React, { useState, useEffect } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const EducationDetailsForm = ({
  formData,
  handleEducationChange,
  addEducation,
}) => {
  const [educationHistory, setEducationHistory] = useState(
    formData.educationHistory || []
  );

  useEffect(() => {
    setEducationHistory(formData.educationHistory || []);
  }, [formData.educationHistory]);

  const handleInternalEducationChange = (e, index) => {
    const { name, value, type, checked } = e.target;
    const newEducationHistory = educationHistory.map((item, i) =>
      i === index
        ? {
            ...item,
            [name]: type === "checkbox" ? checked : value,
            ...(name === "currentlyStudying" && checked ? { endDate: "" } : {}), // Reset endDate if currently studying
          }
        : item
    );
    setEducationHistory(newEducationHistory);
    handleEducationChange({
      target: { name: "educationHistory", value: newEducationHistory },
    });
  };

  const handleDeleteEducation = (index) => {
    const newEducationHistory = educationHistory.filter((_, i) => i !== index);
    setEducationHistory(newEducationHistory);
    handleEducationChange({
      target: { name: "educationHistory", value: newEducationHistory },
    });
  };

  return (
    <div className="col-span-2">
      <label className="block text-2xl font-medium text-gray-900 mt-6">
        Education
      </label>
      <p className="text-xs mt-2 text-gray-600">
        A varied education on your resume sums up the value that your learnings
        and background will bring to the job.
      </p>
      <div className="w-full">
        {educationHistory.map((education, index) => (
          <div key={index} className="mt-4 border rounded-md">
            <div className="flex justify-between items-center bg-slate-200 p-3">
              <h5 className="text-gray-900">
                {education.institute || "(Not Specified)"}
              </h5>
              <DeleteForeverOutlinedIcon
                onClick={() => handleDeleteEducation(index)}
                className="cursor-pointer text-slate-200 hover:text-gray-700 duration-300"
              />
            </div>

            {/* Toggle Currently Studying */}
            <div className="p-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="currentlyStudying"
                  checked={education.currentlyStudying || false}
                  onChange={(e) => handleInternalEducationChange(e, index)}
                  className="mr-2"
                />
                Currently study here
              </label>
            </div>

            {/* Institute and Degree */}
            <div className="flex">
              <div className="w-1/2 p-3">
                <label
                  htmlFor={`institute-${index}`}
                  className="block text-base text-gray-600"
                >
                  Institute
                </label>
                <input
                  id={`institute-${index}`}
                  type="text"
                  name="institute"
                  value={education.institute || ""}
                  onChange={(e) => handleInternalEducationChange(e, index)}
                  className="mt-1 p-2 block w-full border rounded-sm shadow-sm bg-slate-100"
                  placeholder="Enter Institute Name"
                />
              </div>
              <div className="w-1/2 p-3">
                <label
                  htmlFor={`degree-${index}`}
                  className="block text-base text-gray-600"
                >
                  Degree
                </label>
                <input
                  id={`degree-${index}`}
                  type="text"
                  name="degree"
                  value={education.degree || ""}
                  onChange={(e) => handleInternalEducationChange(e, index)}
                  className="mt-1 p-2 block w-full border rounded-sm shadow-sm bg-slate-100"
                  placeholder="Enter Degree"
                />
              </div>
            </div>

            {/* Dates and City */}
            <div className="flex">
              <div className="w-1/3 p-3">
                <label
                  htmlFor={`startDate-${index}`}
                  className="block text-base text-gray-600"
                >
                  Start Date
                </label>
                <input
                  id={`startDate-${index}`}
                  type="date"
                  name="startDate"
                  value={education.startDate || ""}
                  onChange={(e) => handleInternalEducationChange(e, index)}
                  className="mt-1 p-2 block w-full border rounded-sm shadow-sm bg-slate-100"
                />
              </div>
              <div className="w-1/3 p-3">
                <label
                  htmlFor={`endDate-${index}`}
                  className="block text-base text-gray-600"
                >
                  End Date
                </label>
                <input
                  id={`endDate-${index}`}
                  type="date"
                  name="endDate"
                  value={education.endDate || ""}
                  onChange={(e) => handleInternalEducationChange(e, index)}
                  disabled={education.currentlyStudying}
                  className={`mt-1 p-2 block w-full border rounded-sm shadow-sm ${
                    education.currentlyStudying ? "bg-gray-200" : "bg-slate-100"
                  }`}
                />
              </div>
              <div className="w-1/3 p-3">
                <label
                  htmlFor={`city-${index}`}
                  className="block text-base text-gray-600"
                >
                  City
                </label>
                <input
                  id={`city-${index}`}
                  type="text"
                  name="city"
                  value={education.city || ""}
                  onChange={(e) => handleInternalEducationChange(e, index)}
                  className="mt-1 p-2 block w-full border rounded-sm shadow-sm bg-slate-100"
                  placeholder="Enter City"
                />
              </div>
            </div>

            {/* Description */}
            <div className="p-3">
              <label
                htmlFor={`description-${index}`}
                className="block text-base text-gray-600"
              >
                Description
              </label>
              <textarea
                id={`description-${index}`}
                name="description"
                value={education.description || ""}
                onChange={(e) => handleInternalEducationChange(e, index)}
                className="mt-1 p-2 block w-full h-32 border rounded-sm shadow-sm "
              ></textarea>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Education Button */}
      <p
        onClick={addEducation}
        className="text-blue-600 mt-4 text-sm cursor-pointer"
      >
        + Add Education
      </p>
    </div>
  );
};

export default EducationDetailsForm;
