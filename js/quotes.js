const quotes = [
  {
    quote:
      "I figure life's a gift and I don't intend on wasting it. You never know what hand you're going to get dealt next. You learn to take life as it comes at you.",
    author: "Titanic - Jack Dawson",
  },
  {
    quote: "Make it count. Meet me at the clock.",
    author: "Titanic - Jack Dawson",
  },
  {
    quote:
      "Murphy's Law doesn't mean that something bad will happen. It means that whatever can happen will happen.",
    author: "Interstellar - Joseph Cooper",
  },
  {
    quote: "Love is the one thing that transcends time and space.",
    author: "Interstellar - Amelia Brand",
  },
  {
    quote: "누군가 인정해주지 않아도 내 세상은 절대 무너지지 않는다.",
    author: "꿈은 없고요, 그냥 성공하고 싶습니다 - 홍민지",
  },
  {
    quote:
      "성실한 인간에게도 얼마나 많은 가식이 있으며, 고결한 사람에게도 얼마나 많은 비열함이 있고, 불량한 사람에게도 얼마나 많은 선량함이 있는지를 몰랐다.",
    author: "달과 6펜스 - 서머싯 몸",
  },
  {
    quote:
      "It's not up to you to save me, Jack.\nYou're right. Only you can do that.",
    author: "Titanic - Rose & Jack",
  },
  {
    quote: "모두에게 유익한 사람이란 존재하지 않아.",
    author: "진격의 거인 - 아르민",
  },
  {
    quote:
      "다시 눈을 떴을 때 그곳엔 자유가 펼쳐져 있었다. 만약 운명이란 것이 존재한다면 그 변덕스러움에 웃을 수밖에 없었다. 하지만 난 그때 맹세했다. 이제 거짓말은 끝내겠다고. 다시는 자신에게 거짓말하지 않겠다고. 자신에게 솔직하게 살겠다고.",
    author: "진격의 거인 - 유미르",
  },
  {
    quote:
      "그 녀석이 더 간절했고, 난 더 용기를 냈어야 했다. 나빴던 건 신호등이 아니라, 타이밍이 아니라, 내 수많은 망설임들이었다.",
    author: "응답하라 1988 - 김정환",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
