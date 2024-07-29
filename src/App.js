
import './App.css';
import StarRating from './star_rating/StarRating';
import FileExplorer from './file_folder/FileExplorer';
import data from './file_folder/data.json'
import FAQ from './accordion/FAQ';
import Checkbox from './check_box/Checkbox';
import Otp from './otp/Otp';
import Modal from './modal/Modal';
import Filter from './filter/Filter';
import DropDown from './dropDown/DropDown';
import Tabs from './tabs/Tabs';
import Swap from './swapListElement/swap';
import Memory from './2D-memoryCube/Memory';
import ProgressBar from './progress/ProgressBar';
import { useEffect, useState } from 'react';

function App() {
  const [progressBar, setProgressBar] = useState(0);
  useEffect(()=>{
    const interval = setTimeout(() => { 
      if(progressBar<100) setProgressBar(progressBar+1);
     },20)
  })
  return (
    <div className="app" style={{backgroundColor: 'grey', textAlign:'center'}}>
      {/* <StarRating starCount={10}/> */}
      {/* <FileExplorer data={data}/> */}
      {/* <FAQ/> */}
      {/* <Checkbox/> */}
      {/* <Otp len={6}/> */}
      {/* <Modal/> */}
      {/* <Filter/> */}
      {/* <h1>Hello</h1> */}
      {/* <DropDown/> */}
      {/* <Tabs/> */}
      {/* <Swap/> */}
      {/* <Memory/> */}
      <ProgressBar progress={progressBar} color='lightgreen'/>
    </div>
  );
}

export default App;
