import logo from './logo.svg';
import './App.css';

function App(){
    return(
        <div className="App-main">
            <div claassName="App-box">
                <div className="Prof">
                    <img src="Profile_image.png" alt="profileImage"></img>
                    <p>進撃の巨人</p>
                </div>
                <div className="Design_rader">
                    <ul>
                        <li>デザイン  Lv. 2  0/100</li>
                        <li>・色彩:3</li>
                        <li>・UI:4</li>
                        <li>・CSS:5</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default App;