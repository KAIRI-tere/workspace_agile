import logo from './logo.svg';
import './App.css';

// const whiteProf = document.getElementById("white");
// const redProf = document.

function App() {
  return (
    <div className="App-main">
      <div className="App-box">
        <div className="Prof">
          <input placeholder="入力してください" />
          <img src="Profile_image.png" alt="xxx" />
        </div>
        <div className="Book-Level">
          <ul>
            <li>デザイン Lv. 2 0/2</li>
            <li>マネジメント Lv. 4 3/5</li>
            <li>ビジネス Lv. 5 0/8</li>
            <li>その他 Lv. 7 1/21</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;