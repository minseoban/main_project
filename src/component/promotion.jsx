import React from 'react';
import '../App.css'; // Make sure styles are applied

function Promotion() {
  const promotion = [
    {
      title: (
        <>
        6월 이달의 맛, 인스타그램에 사진을 <br/> 올려주세요!
        </>
      ),
      period: '2025-06-01 ~ 2025-06-30',
      image: '/images/promo1.png'
    },
    {
      title: '6월 이달의 더블주니어! 이달의 맛 선택 시, 500원 추가하면 싱글레귤러를 더블주니어로 더블업!',
      period: '2025-06-01 ~ 2025-06-30',
      image: '/images/promo2.png'
    },
    {
      title: (
        <>
          신한 SOL TRAVEL 체크카드로 결제 시, <br/> 싱글레귤러 800원
        </>
      ),
      period: '2025-06-01 ~ 2025-06-30',
      image: '/images/promo3.png'
    },
    {
      title: (
      <>
        쿼터 이상 구매시, 젤리곰 무드등 세트 <br/> 9,900원!
      </>
      ),
      period: '2025-05-23 ~ 소진 시 까지',
      image: '/images/promo4.png'
    },
    {
      title: '해피볼 티니핑 요정 프린세스 랜덤 피규어',
      period: '2025-05-01 ~ 소진 시 까지',
      image: '/images/promo5.png'
    }
  ];

  return (
    <section className="promotions">
      <h2>Promotion</h2>
      <h3>배라의 다양한 혜택과 이벤트를 만나보세요</h3>

      <div className="promotion-grid">
        {promotion.map((promo, index) => (
          <div key={index} className="promotion-card">
            <a href="*"><img src={process.env.PUBLIC_URL + promo.image} alt={`프로모션 ${index + 1}`} /></a>
            <div className="promo-text">
              <h4>{promo.period}</h4>
              <hr />
              <p>{promo.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Promotion;
