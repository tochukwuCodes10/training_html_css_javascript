import { sum } from "./sum.js";

const result = sum(2, 5);
console.log("sum", result);
console.log("cool", globalThis.cool);
globalThis.user = "Tochukwu";

// export default user;
