import { useState } from 'react';
import './styles.css';
import { RadarChart } from './RadarChart';
 
export  const Todo = () => {
  const [showDesign, setShowDesign] = useState(false);
 
  const onClickDesignDetail = () => {
    setShowDesign(true);
  };
 
  const onClickReturnHome = () => {
    setShowDesign(false);
  };
 
  return (
    <>
      <div className="App-main">
        <div className="App-box">
          <div className="Prof">
            <img src="Profile_image.png" alt="profileImage"></img>
            <p>進撃の巨人</p>
          </div>
          <div className="Book-Level">
            {!showDesign && (
              <div>
                <botton onClick={onClickDesignDetail} className="button_design">
                  <ul>
                    <li>デザイン</li>
                    <li>Lv.2 0/100</li>
                  </ul>
                </botton>
                <botton className="button_management">
                  <ul>
                    <li>マネジメント</li>
                    <li>Lv.4 2/100</li>
                  </ul>
                </botton>
                <botton className="button_business">
                  <ul>
                    <li>ビジネス</li>
                    <li>Lv.3 0/100</li>
                  </ul>
                </botton>
                <botton className="button_etc">
                  <ul>
                    <li>その他</li>
                    <li>Lv.2 0/100</li>
                  </ul>
                </botton>
              </div>
            )}
            {showDesign && (
              <div>
                <div className="chart-top">
                  <h1>デザイン能力チャート</h1>
                  <button onClick={onClickReturnHome} className="button-return">
                    カテゴリ選択へ戻る
                  </button>
                </div>
                <div className="App">
                  <RadarChart />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
 