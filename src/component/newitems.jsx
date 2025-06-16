import React from 'react';

function NewItems() {
  const items = [
    {
      name: '미피와 신나는 애니멀 파크',
      image: '/images/item1.png',
      link: '*',
    },
    {
      name: '네모 블록 헬로키티',
      image: '/images/item2.png',
    },
    {
      name: '네모 블록 헬로키티',
      image: '/images/item3.png',
    },
    {
      name: '네모 블록 헬로키티',
      image: '/images/item4.png',
    },
    {
      name: '네모 블록 헬로키티',
      image: '/images/item5.png',
    },
  ];

  return (
    <section className="new_items">
      <h2>New Item</h2>
      <h3>새로 나온 배라의 신제품을 소개합니다</h3> 
      <ul>
        {items.map((item, index) => (
          <li key={index} className="new_item_card">
            {item.link ? (
              <a href={item.link}>
                <img src={process.env.PUBLIC_URL + item.image} alt={item.name} />
              </a>
            ) : (
              <img src={process.env.PUBLIC_URL + item.image} alt={item.name} />
            )}
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NewItems;
