const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


// Using reduce to sum all the battery amounts
const totalBatteries = batteryBatches.reduce((accumulator, currentBatch) => {
  return accumulator + currentBatch;
}, 0);  // The second argument (0) is the initial value of the accumulator

console.log(totalBatteries);  // This should output the sum of the batches
