// src/components/SkillsAndLanguages.js
import React from "react";

const SkillsAndLanguages = ({
  skills,
  handleSkillsChange,
  language,
  handleLangChange,
}) => {
  return (
    <div className="col-span-2">
      {/* Skills Selection */}
      <label
        htmlFor="skills"
        className="block text-2xl mt-6 font-medium text-gray-900"
      >
        Skills
      </label>
      <p className="text-sm mt-2 mb-2 text-gray-600">
        Choose important skills to showcase your talents based on your Job
        Profile:
      </p>
      <div className="flex flex-wrap">
        {["Communication", "Java", "Python", "Full Stack", "C", "C++"].map(
          (skill) => (
            <div
              key={skill}
              className={`block border rounded-md text-gray-700 mr-2 p-3 cursor-pointer hover:bg-blue-400 hover:text-white  ${
                skills.includes(skill) ? "bg-slate-200" : "bg-slate-200"
              }`}
              onClick={() => handleSkillsChange(skill)}
            >
              {skill}
            </div>
          )
        )}
      </div>

      {/* Language Selection */}
      <label
        htmlFor="languages"
        className="block text-2xl mt-6 font-medium text-gray-900"
      >
        Languages
      </label>
      <p className="text-sm mt-2 mb-2 text-gray-600">
        Select languages to showcase your proficiency.
      </p>
      <div className="flex flex-wrap">
        {["English", "Hindi", "Urdu", "French", "Russian", "Portuguese"].map(
          (lang) => (
            <div
              key={lang}
              className={`block border rounded-md text-gray-700 mr-2 p-3 cursor-pointer hover:bg-blue-400 hover:text-white ${
                language.includes(lang) ? " bg-slate-200" : "bg-slate-200"
              }`}
              onClick={() => handleLangChange(lang)}
            >
              {lang}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SkillsAndLanguages;
