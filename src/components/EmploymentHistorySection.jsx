import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const EmploymentHistorySection = ({ formData, setFormData }) => {
  const addEmployment = () => {
    setFormData({
      ...formData,
      employmentHistory: [
        ...formData.employmentHistory,
        {
          id: formData.employmentHistory.length,
          employer: "",
          jobTitle: "",
          startDate: "",
          endDate: "",
          city: "",
          description: "",
        },
      ],
    });
  };

  const handleEmploymentChange = (e, index) => {
    const updatedEmployment = [...formData.employmentHistory];
    updatedEmployment[index][e.target.name] = e.target.value;
    setFormData({ ...formData, employmentHistory: updatedEmployment });
  };

  const deleteEmployment = (index) => {
    const updatedEmployment = [...formData.employmentHistory];
    updatedEmployment.splice(index, 1);
    setFormData({ ...formData, employmentHistory: updatedEmployment });
  };

  return (
    <div className="col-span-2">
      <label className="block text-2xl font-medium text-gray-900">Employment History</label>
      <p className="text-sm mt-2 text-gray-600">Show your relevant experience.</p>

      {formData.employmentHistory.map((employment, index) => (
        <div key={employment.id} className="mt-4 border rounded-md">
          <h5 className="font-semibold text-gray-600 bg-gray-200 p-3">{employment.jobTitle || "(Not Specified)"}</h5>
          
          <div className="flex flex-row">
            <div className="w-1/2 p-2">
              <label htmlFor={`employer-${index}`} className="block text-sm font-medium text-gray-600">Employer</label>
              <input
                id={`employer-${index}`}
                type="text"
                name="employer"
                value={employment.employer}
                onChange={(e) => handleEmploymentChange(e, index)}
                className="mt-1 p-2 w-full border rounded-sm shadow-sm bg-slate-100"
                placeholder="Enter Employer Name"
              />
            </div>
            <div className="w-1/2 p-3">
              <label htmlFor={`jobTitle-${index}`} className="block text-sm font-medium text-gray-600">Job Title</label>
              <input
                id={`jobTitle-${index}`}
                type="text"
                name="jobTitle"
                value={employment.jobTitle}
                onChange={(e) => handleEmploymentChange(e, index)}
                className="mt-1 p-2 w-full border rounded-sm shadow-sm bg-slate-100"
                placeholder="Enter Job Title"
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-1/2 p-2">
              <label htmlFor={`startDate-${index}`} className="block text-sm font-medium text-gray-600">Start Date</label>
              <input
                id={`startDate-${index}`}
                type="date"
                name="startDate"
                value={employment.startDate}
                onChange={(e) => handleEmploymentChange(e, index)}
                className="mt-1 p-2 w-full border rounded-sm shadow-sm bg-slate-100"
              />
            </div>
            <div className="w-1/2 p-2">
              <label htmlFor={`endDate-${index}`} className="block text-sm font-medium text-gray-600">End Date</label>
              <input
                id={`endDate-${index}`}
                type="date"
                name="endDate"
                value={employment.endDate}
                onChange={(e) => handleEmploymentChange(e, index)}
                className="mt-1 p-2 w-full border rounded-sm shadow-sm bg-slate-100"
              />
            </div>
          </div>

          <div className="p-2">
            <label htmlFor={`description-${index}`} className="block text-sm font-medium text-gray-600">Description</label>
            <textarea
              id={`description-${index}`}
              name="description"
              value={employment.description}
              onChange={(e) => handleEmploymentChange(e, index)}
              className="mt-1 p-2 block h-[17vh] w-full border rounded-sm shadow-sm bg-slate-100"
              placeholder="Enter Job Description"
            ></textarea>
          </div>

          <button
            type="button"
            onClick={() => deleteEmployment(index)}
            className="mt-2 text-red-600 text-sm cursor-pointer"
          >
            <DeleteForeverIcon />
          </button>
        </div>
      ))}

      <p onClick={addEmployment} className="text-blue-600 mt-4 text-sm cursor-pointer">+ Add Employment</p>
    </div>
  );
};

export default EmploymentHistorySection;
