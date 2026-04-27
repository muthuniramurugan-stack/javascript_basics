// In JavaScript, you can work with date and time using the built-in Date object.
let bday = new Date();
console.log(bday);
let now = new Date();

console.log(now.getFullYear());   // Year (e.g., 2026)
console.log(now.getMonth());      // Month (0–11, add +1 for real month)
console.log(now.getDate());       // Day of month
console.log(now.getDay());        // Day of week (0 = Sunday)

console.log(now.getHours());      // Hours
console.log(now.getMinutes());    // Minutes
console.log(now.getSeconds());    // Seconds