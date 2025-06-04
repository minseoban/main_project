import React from 'react';

function NewItems() {
  const items = [
    {
      name: '미피와 신나는 애니멀 파크',
      image: 'path_to_image1.jpg',
    },
    {
      name: '네모 블록 헬로키티',
      image: 'path_to_image2.jpg',
    },
    // 추가 신제품 항목들...
  ];

  return (
    <section className="new_items">
      <h2>신제품</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NewItems;
