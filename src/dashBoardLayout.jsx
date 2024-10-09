import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './Quiz/Quiz';
import FileExplorer from './file_folder/FileExplorer';
import data from './file_folder/data.json';

const DashboardHome = () => <h2>Welcome to Pradeep Binwal Dashboard Screen</h2>;



const DashBoardLayout = () => {
  return (
    <Router>
      <div style={{marginLeft:'400px',marginRight:'400px'}} >
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/folder" element={<FileExplorer data={data}/>} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default DashBoardLayout;
