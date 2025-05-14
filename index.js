const reports = [
  [7, 6, 4, 2, 1], // Safe
  [1, 2, 7, 6, 8], // Unsafe
  [9, 7, 6, 2, 1], // Unsafe
  [1, 3, 2, 4, 5], // Unsafe
  [8, 6, 4, 4, 1], // Unsafe
  [1, 3, 6, 7, 9], // Safe
];

for (let i = 0; i < reports.length; i++) {
  // Creating two loops to go through the 2d array
let increasing = true;
let decreasing = true;
  for (let j = 1; j < reports[i].length; j++) {
    let diff = reports[i][j] - reports[i][j - 1]; // Create a variable that checks the difference between the numbers in the reports
    console.log("reports[" + i + "][" + j + "] = " + reports[i][j]);

    if (diff >= 1 && diff <= 3) {
      // Checks if the row is increasing within permitted range
      decreasing = false;
    } else if (diff <= -1 && diff >= -3) {
      // Checks if the row is decreasing within permitted range
      increasing = false;
    } else {
      // Checks if the row is not following the rules of increase or decrease of 1-3
      increasing = false;
      decreasing = false;
    }
  }

  if (increasing) {
    console.log("Report " + [i] + " is increasing (diff between 1 and 3). SAFE");
  } else if (decreasing) {
    console.log("Report " + [i] + " is decreasing (diff between 1 and 3). SAFE");
  } else {
    console.log("Report " + [i] + " is NOT strictly increasing or decreasing within range 1–3. NOT SAFE");
  }
}