import React from 'react';

function BRPlay() {
  return (
    <section className="br_play">
      <h2>BR Play</h2>
      <p>배라와 함께한 당신의 다양한 의견을 듣습니다.</p>
      <img src={process.env.PUBLIC_URL + "/images/play_light.png"} alt="" />
      <div className='play_mainimg'>
        <a href="*"><img src={process.env.PUBLIC_URL + "/images/play_main1.png"} alt="" /></a>
        <a href="*"><img src={process.env.PUBLIC_URL + "/images/play_main2.png"} alt="" /></a>
      </div>
    </section>
  );
}

export default BRPlay;
