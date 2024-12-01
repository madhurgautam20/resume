import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResumeBuilder from './ResumeBuilder'; // Assuming ResumeBuilder is your main component

const App = () => {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}> {/* Enabling the flags here */}
      <Routes>
        {/* Define your routes, including splat route */}
        <Route path="/" element={<ResumeBuilder />} />
        <Route path="*" element={<div>Page Not Found</div>} /> {/* Catch-all route */}
      </Routes>
    </Router>
  );
};

export default App;
