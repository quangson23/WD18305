
const gameEvents = new Map([
  [17, "⚽️ ghi bàn"],
  [36, "🔁 thay người"],
  [47, "⚽️ ghi bàn"],
  [61, "🔁 thay người"],
  [64, "🔶 nhận thẻ vàng"],
  [69, "🔴 nhận thẻ đỏ"],
  [70, "🔁 thay người"],
  [72, "🔁 thay người"],
  [76, "⚽️ ghi bàn"],
  [80, "⚽️ ghi bàn"],
  [92, "🔶 nhận thẻ vàng"],
]);

// Câu 1:
const events = [...new Set(gameEvents.values())];
console.log(events);

// Câu 2:
gameEvents.delete(64);

// Câu 3:
console.log(
  `1 sự kiện xảy ra, trung bình mỗi ${90 / gameEvents.size} phút`
);

// Câu 4:
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}
