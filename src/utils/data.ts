const data = [
  {
    id: 1,
    img: '/src/images/Image.png',
    name: 'Эспрессо',
    quantity: '40 мл',
    addon: [{ name: 'Декаф', price: 40 }],
    price: 100,
    type: 'cofee'
  },
  {
    id: 2,
    img: '/src/images/Image2.png',
    name: 'Американо',
    quantity: '200 мл',
    addon: [{ name: 'Декаф', price: 40 }],
    price: 160,
    type: 'cofee'
  },
  {
    id: 3,
    img: '/src/images/Image3.png',
    name: 'Капучино',
    quantity: '280 мл',
    addon: [
      { name: 'Декаф', price: 40 },
      { name: 'Альтернативное молоко', price: 20 }
    ],
    price: 200,
    type: 'cofee'
  },
  {
    id: 4,
    img: '/src/images/Image4.png',
    name: 'Латте',
    quantity: '280 мл',
    addon: [
      { name: 'Декаф', price: 40 },
      { name: 'Альтернативное молоко', price: 20 }
    ],
    price: 200,
    type: 'cofee'
  },
  {
    id: 5,
    img: '/src/images/Image5.png',
    name: 'Раф классический',
    quantity: '40 мл',
    addon: [
      { name: 'Декаф', price: 40 },
      { name: 'Альтернативное молоко', price: 20 }
    ],
    price: 100,
    type: 'cofee'
  },
  {
    id: 6,
    img: '/src/images/Image6.png',
    name: 'Раф от Капи с апельсином',
    quantity: '240 мл',
    addon: [
      { name: 'Декаф', price: 40 },
      { name: 'Альтернативное молоко', price: 20 }
    ],
    price: 300,
    type: 'cofee'
  },
  {
    id: 7,
    img: '/src/images/Image7.png',
    name: 'Фильтр',
    quantity: '210 мл',
    addon: [
      { name: 'Декаф', price: 40 },
      { name: 'Альтернативное молоко', price: 20 }
    ],
    price: 180,
    type: 'cofee'
  },
  {
    id: 8,
    img: '/src/images/Image8.png',
    name: 'Воронка',
    quantity: '210 мл',
    addon: [
      { name: 'Декаф', price: 40 },
      { name: 'Альтернативное молоко', price: 20 }
    ],
    price: 180,
    type: 'cofee'
  },
  {
    id: 9,
    img: '/src/images/chocolate.png',
    name: 'Бразильский горячий шоколад',
    quantity: '350 мл',
    addon: [{ name: 'Альтернативное молоко', price: 20 }],
    price: 220,
    type: 'notcofee'
  },
  {
    id: 10,
    img: '/src/images/chinese-tea.png',
    name: 'Традиционный китайский зеленый чай',
    quantity: '500 мл',
    addon: [{ name: 'Декаф', price: 40 }],
    price: 370,
    type: 'notcofee'
  },
  {
    id: 11,
    img: '/src/images/green-tea.png',
    name: 'Зеленый чай с жасмином',
    quantity: '500 мл',
    price: 380,
    type: 'notcofee'
  },
  {
    id: 12,
    img: '/src/images/black-tea.png',
    name: 'Черный чай классический',
    quantity: '500 мл',
    price: 370,
    type: 'notcofee'
  },
  {
    id: 13,
    img: '/src/images/orange-tea.png',
    name: 'Фирменный чай от Капи с апельсином, мятой и медом',
    quantity: '500 мл',
    price: 420,
    type: 'notcofee'
  },
  {
    id: 14,
    img: '/src/images/cheescake.png',
    name: 'Чизкейк классический',
    quantity: '150 г',
    price: 220,
    type: 'desert'
  },
  {
    id: 15,
    img: '/src/images/kapi.png',
    name: 'Чизкейк от Капи',
    quantity: '150 г',
    price: 260,
    type: 'desert'
  },
  {
    id: 16,
    img: '/src/images/carrotpie.png',
    name: 'Бразильский морковный пирог',
    quantity: '200 г',
    price: 220,
    type: 'desert'
  },
  {
    id: 17,
    img: '/src/images/kiss.png',
    name: 'Бейжиньо (бразильский маленький поцелуй)',
    quantity: '100 г',
    price: 120,
    type: 'desert'
  },
  {
    id: 18,
    img: '/src/images/browny.png',
    name: 'Брауни с бразильским шоколадом и специями',
    quantity: '150 г',
    price: 230,
    type: 'desert'
  }
]

export default data
