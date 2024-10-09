import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Quiz from './Quiz/Quiz';
import FileExplorer from './file_folder/FileExplorer';
import data from './file_folder/data.json';
import Pagination from './pagination/Pagination';
import Memory from './2D-memoryCube/Memory';
import FAQ from './accordion/FAQ';
import AddAndRemove from './addAndRemovePlayer/index';
import Checkbox from './check_box/Checkbox';
import DropDown from './dropDown/DropDown';
import Filter from './filter/Filter'; // Assuming you want to include this
import Modal from './modal/Modal'; // Assuming you want to include this
import Otp from './otp/Otp'; // Assuming you want to include this
import ProgressBar from './progress/ProgressBar'; // Assuming you want to include this
import StarRating from './star_rating/StarRating'; // Assuming you want to include this
import StopWatch from './stopWatch/StopWatch'; // Assuming you want to include this
import Swap from './swapListElement/swap'; // Assuming you want to include this
import Tabs from './tabs/Tabs'; // Assuming you want to include this




const DashboardHome = () => {
 
  const linkStyle = {
    textDecoration: 'none',
    color: '#5505BB',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  };

  const linkHoverStyle = {
    backgroundColor: 'rgba(85, 5, 187, 0.1)',
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>This is a dashboard</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '200px', margin: 'auto' }}>
        {[
          { to: '/quiz', label: 'Quiz' },
          { to: '/folder', label: 'Folder Structure' },
          { to: '/pagination', label: 'Pagination' },
          { to: '/memory', label: '2D Memory Card' },
          { to: '/accordion', label: 'Accordion' },
          { to: '/check-box', label: 'CheckBox' },
          { to: '/addAndRemovePlayer', label: 'Add And Remove Player' },
          { to: '/dropDown', label: 'Drop Down' },
          { to: '/filter', label: 'Filter' },
          { to: '/modal', label: 'Modal' },
          { to: '/otp', label: 'OTP' },
          { to: '/progressBar', label: 'Progress Bar' },
          { to: '/starRating', label: 'Star Rating' },
          { to: '/stopWatch', label: 'Stop Watch' },
          { to: '/swap', label: 'Swap List Element' },
          { to: '/tabs', label: 'Tabs' },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '';
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const DashBoardLayout = () => {
  return (
    <Router>
      <div style={{ width: '500px', margin: 'auto' }}>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/folder" element={<FileExplorer data={data} />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/accordion" element={<FAQ />} />
          <Route path="/addAndRemovePlayer" element={<AddAndRemove />} />
          <Route path="/check-box" element={<Checkbox />} />
          <Route path="/dropDown" element={<DropDown />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/progressBar" element={<ProgressBar progress={'70'} color={'aliceblue'} />} />
          <Route path="/starRating" element={<StarRating starCount={10} />} />
          <Route path="/stopWatch" element={<StopWatch />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/tabs" element={<Tabs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default DashBoardLayout;
