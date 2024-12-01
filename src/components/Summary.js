import React, { useContext } from "react";
// import { ResumeInfoContext } from "../ResumeInfoContext";

function Summery () {
//  const {resumeInfo , setResumeInfo}=useContext(ResumeInfoContext)
  return (
    <div className="col-span-2">
      <h2 className="font-bold text-md">Professional Summery</h2>
      <p className="text-xs text-gray-600 mt-2">
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.Get <span className="text-blue-900 font-bold cursor-pointer ">Help by AI Writer </span>
      </p>
      <textarea  className="mt-1 p-2 block w-full h-[17vh] border rounded-sm shadow-sm "></textarea>
    </div>
  );
};

export default Summery;
