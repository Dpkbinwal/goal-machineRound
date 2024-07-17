
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

function App() {
  return (
    <div className="app" style={{backgroundColor: 'grey'}}>
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
      <Memory/>
    </div>
  );
}

export default App;
