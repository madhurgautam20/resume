import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ProgressBar from "./components/ProgressBar"; // Assuming this is correct
import PersonalDetailsForm from "./components/PersonalDetailsForm"; // Assuming this is correct
import SkillsAndLanguages from "./components/SkillsAndLanguages"; // Assuming this is correct
import Preview from "./components/Preview"; // Assuming this is correct

const ResumeBuilder = () => {
  // Form state initialization
  const [formData, setFormData] = useState({
    jobtitle: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    educationHistory: [],
    employmentHistory: [],
    skills: [],
    language: [],
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Dynamically update the state
    }));
  };

  // Handle skills changes
  const handleSkillsChange = (skill) => {
    setFormData((prevState) => ({
      ...prevState,
      skills: prevState.skills.includes(skill)
        ? prevState.skills.filter((s) => s !== skill)
        : [...prevState.skills, skill], // Add or remove skill
    }));
  };

  // Handle language changes
  const handleLangChange = (lang) => {
    setFormData((prevState) => ({
      ...prevState,
      language: prevState.language.includes(lang)
        ? prevState.language.filter((s) => s !== lang)
        : [...prevState.language, lang], // Add or remove language
    }));
  };

  // Set up printing functionality
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // Calculate progress based on filled fields
  const calculateCompletion = () => {
    const nonSkillsFields = Object.keys(formData).filter(
      (key) =>
        key !== "skills" && key !== "language" && key !== "employmentHistory" && key !== "educationHistory"
    );
    const totalFields = nonSkillsFields.length + 4; // +4 for skills, language, employmentHistory, educationHistory
    const filledFields = nonSkillsFields.filter(
      (key) => formData[key].trim() !== ""
    ).length;
    const skillsFilled = formData.skills.length > 0 ? 1 : 0;
    const langFilled = formData.language.length > 0 ? 1 : 0;
    const expFilled = formData.employmentHistory.length > 0 ? 1 : 0;
    const eduFilled = formData.educationHistory.length > 0 ? 1 : 0;
    const totalProgress = filledFields + skillsFilled + langFilled + expFilled + eduFilled;
    return Math.round((totalProgress / totalFields) * 100);
  };

  return (
    <div className="flex flex-row bg-gray-100 h-screen">
      {/* Left Section for Form */}
      <div className="w-1/2 bg-white p-8 rounded-md shadow-lg overflow-y-auto">
        <ProgressBar completionPercentage={calculateCompletion()} />
        <PersonalDetailsForm formData={formData} handleChange={handleChange} />
        <SkillsAndLanguages
          skills={formData.skills}
          handleSkillsChange={handleSkillsChange}
          language={formData.language}
          handleLangChange={handleLangChange}
        />
      </div>
      {/* Right Section for Preview */}
      <div className="w-1/2 flex flex-col   sticky top-0 pl-4 h-screen overflow-y-auto">
      <div className="flex justify-end mx-40 mt-5 text-2xl">

        <button
          onClick={handlePrint}
          className="px-4 block py-2 mt-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 mb-4"
        >
          Download Pdf
        </button>
      </div>
        <Preview formData={formData} ref={componentRef} />
      </div>
    </div>
  );
};

export default ResumeBuilder;
