import React from 'react';

function Promotion() {
  const promotion = [
    {
      title: '6월 이달의 맛, 인스타그램에 사진을 올려주세요!',
      period: '2025-06-01 ~ 2025-06-30',
    },
    {
      title: '6월 이달의 더블주니어! 이달의 맛 선택 시, 500원 추가하면 싱글레귤러를 더블주니어로 더블업!',
      period: '2025-06-01 ~ 2025-06-30',
    },
    {
      title: '신한 SOL TRAVEL 체크카드로 결제 시, 싱글레귤러 800원',
      period: '2025-06-01 ~ 2025-06-30',
    },
    {
      title: '쿼터 이상 구매시, 젤리곰 무드등 세트 9,900원!',
      period: '2025-05-23 ~ 소진 시 까지',
    },
    {
      title: '해피볼 티니핑 요정 프린세스 랜덤 피규어',
      period: '2025-05-01 ~ 소진 시 까지',
    },
    // 추가 프로모션 항목들...
  ];

  return (
    <section className="promotion">
      <h2>PROMOTION</h2>
      <h3>배라의 다양한 혜택과 이벤트를 만나보세요</h3>
      <ul>
        {promotion.map((promo, index) => (
          <li key={index}>
            <h3>{promo.title}</h3>
            <p>{promo.period}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Promotion;
