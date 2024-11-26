// import logo from './logo.svg';
// import './App.css';
// import { RadarChart } from './RadarChart';

// // const whiteProf = document.getElementById("white");
// // const redProf = document.

// function App() {
//   return (
//     <div className="App-main">
//       <div className="App-box">
//         <div className="Prof">
//           <img src="Profile_image.png" alt="profileImage"></img>
//           <p>進撃の巨人</p>
//         </div>
//         <div>
//           <RadarChart />
//         </div>
//         <div className="Book-Level">
//           <botton className="button_design">
//             <ul>
//               <li>デザイン</li>
//               <li>Lv.2  0/100</li>
//             </ul>
//           </botton>
//           <botton className="button_management">
//             <ul>
//               <li>マネジメント</li>
//               <li>Lv.4  2/100</li>
//             </ul>
//           </botton>
//           <botton className="button_business">
//             <ul>
//               <li>ビジネス</li>
//               <li>Lv.3  0/100</li>
//             </ul>
//           </botton>
//           <botton className="button_etc">
//             <ul>
//               <li>その他</li>
//               <li>Lv.2  0/100</li>
//             </ul>
//           </botton>
//           {/* <input className="Input" placeholder="xxx" />  
//          <button className="Button">Search</button> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
 
import { Todo } from './App.jsx';
 
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
 
root.render(
  <StrictMode>
    <Todo />
  </StrictMode>
);