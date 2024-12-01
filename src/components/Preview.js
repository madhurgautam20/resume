import React from "react";
import LinkedInSection from "./LinkedInSection";  // Import the new LinkedInSection component

const Preview = React.forwardRef(({ formData }, ref) => {

  // Helper function to format date as "MMM-YY" or "Present" if ongoing
  const formatDate = (date, isEndDate = false) => {
    if (!date) return isEndDate ? "Present" : "N/A"; // Return "Present" for ongoing end dates
    const options = { year: "2-digit", month: "short" };
    return new Date(date).toLocaleDateString("en-US", options).replace(",", "");
  };

  return (
    <div className="bg-slate-200 w-full h-[150vh] p-4">
      <div
        ref={ref}
        className="bg-white flex flex-col shadow-lg rounded-lg border border-gray-300" 
        style={{ height: '130vh' ,  overflow: 'auto' }} // Fixed height with scroll
      >
        {/* Header Section */}
        <div className="text-gray-700 p-4 m-6 rounded-lg mb-4">
          <div className="flex justify-between">
            <div>
              <h2 className="text-4xl font-bold">
                {formData.firstName} {formData.lastName}
              </h2>
              <p className="text-xl text-blue-400 font-semibold">
                {formData.jobtitle}
              </p>
            </div>
            <div className="text-right text-black font font-semibold">
              {formData.email && <p className="text-lg">{formData.email}</p>}
              {formData.phone && <p className="text-lg">{formData.phone}</p>}
              {formData.location && (
                <p className="text-base">{formData.location}</p>
              )}
            </div>
          </div>
        </div>
        
        {/* Use the LinkedInSection component */}
        <LinkedInSection linkedin={formData.linkedin} />

        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full">
            <div className="flex flex-col w-1/2"> {/* Corrected className */}
              {/* Work Experience */}
              {formData.employmentHistory?.length > 0 && (
                <div className="mt-4 p-4 rounded-md">
                  <h3 className="font-bold text-xl mb-7 text-gray-500">
                    Work Experience
                  </h3>
                  {formData.employmentHistory.map((exp, index) => (
                    <div key={index} className="text-lg mb-4">
                      <h4 className="text-xl mb-2 font-semibold">
                        {exp.employer || "Employer"} - {exp.jobTitle || "Title"}
                      </h4>
                      <p className="text-base mb-2 text-blue-500">
                        {formatDate(exp.startDate)} -{" "}
                        {formatDate(exp.endDate, true)}
                      </p>
                      <p className="mb-2">{exp.city}</p>
                      <p>{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col w-1/2">
              {/* Education */}
              {formData.educationHistory?.length > 0 && (
                <div className="mt-4 p-4 rounded-md">
                  <h3 className="font-bold text-xl mb-7 text-gray-500">
                    Education
                  </h3>
                  {formData.educationHistory.map((edu, index) => (
                    <div key={index} className="text-lg mb-4">
                      <h4 className="text-xl font-semibold">
                        {edu.schoolName || "School"} - {edu.degree || "Degree"}
                      </h4>
                      <p className="text-base text-blue-500">
                        {formatDate(edu.startDate)} -{" "}
                        {formatDate(edu.endDate, true)}
                      </p>
                      <p>{edu.city}</p>
                      <p>{edu.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills */}
              {formData.skills?.length > 0 && (
                <div className="mt-4 p-4 rounded-md">
                  <h3 className="font-bold text-xl mb-2 text-gray-500">
                    Skills
                  </h3>
                  <ul className="flex flex-row">
                    {formData.skills.map((skill, index) => (
                      <li className="p-1" key={index}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Languages */}
              {formData.language?.length > 0 && (
                <div className="mt-4 p-4 rounded-md">
                  <h3 className="font-bold text-xl mb-2 text-gray-500">
                    Languages
                  </h3>
                  <ul className="flex flex-row">
                    {formData.language.map((lang, index) => (
                      <li className="p-1" key={index}>
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Preview;
