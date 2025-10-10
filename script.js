const quotes = [
  "You don’t have to go fast, you just have to go.",
  "Discipline beats motivation every single time.",
  "One run at a time, one step closer to your best self.",
  "Simplicity is consistency — that’s where results come from.",
  "If it was easy, everyone would do it."
];

document.getElementById("new-quote").addEventListener("click", () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("motivational-quote").textContent = `"${randomQuote}"`;
});
