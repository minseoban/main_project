import React from 'react';

function BrBenefit() {
  return (
    <section className="br_benefit">
      <h2>BR Benefit</h2>
      <h3>배라와 함께 다양한 혜택을 즐기세요</h3>
      <div className="store">
          <h4>Store</h4>
          <p>내 주변 가까운 <br/> 배스킨라빈스 매장을 찾아보세요</p>
          <img src={process.env.PUBLIC_URL + "/images/store_map.png"} alt="" />
        </div>
      <div className="brway">
          <h4>BR Way</h4>
          <p>오랜 시간 우리 곁에 함께한 <br/> 배스킨라빈스의 이야기</p>
          <img src={process.env.PUBLIC_URL + "/images/way_story.png"} alt="" />
      </div>
    </section>
  );
}

export default BrBenefit;
