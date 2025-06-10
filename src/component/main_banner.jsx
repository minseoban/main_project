import React from 'react';

function MainBanner() {
  return (
    <section className="main">
      {/* <h2>이달의 맛을 만나보세요!</h2> */}
      <div className="main_banner">
        <img src={process.env.PUBLIC_URL + "/images/surround.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "/images/main_banner.png"} alt="이달의 맛 배너" />
      </div>
      <div className="main_components">
        <a href="*"><img src={process.env.PUBLIC_URL + "/images/main1.png"} alt="" /></a>
        <a href="*"><img src={process.env.PUBLIC_URL + "/images/main2.png"} alt="" /></a>
        <a href="*"><img src={process.env.PUBLIC_URL + "/images/main3.png"} alt="" /></a>
      </div>
    </section>
  );
}

export default MainBanner;
