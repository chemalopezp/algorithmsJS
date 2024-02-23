function maxKilledEnemies(grid: string[][]): number {
  let enemiesKilled = 0;
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (grid[x][y] === "0") {
        console.log("Planting bomb ", x, y);
        let enemiesKilledHere = 0;
        let i = x;
        let j = y;
        while (i >= 0 && i < grid.length && grid[i][y] !== "W") {
          if (grid[i][y] === "E") {
            console.log("Killed one at ", i, y);
            enemiesKilledHere++;
          }
          i++;
        }
        while (i >= 0 && i < grid.length && grid[i][y] !== "W") {
          if (grid[i][y] === "E") {
            console.log("Killed one at ", i, y);
            enemiesKilledHere++;
          }
          i--;
        }
        while (j >= 0 && j < grid[x].length && grid[x][j] !== "W") {
          if (grid[x][j] === "E") {
            console.log("Killed one at ", x, j);
            enemiesKilledHere++;
          }
          j++;
        }
        while (j >= 0 && j < grid[x].length && grid[x][j] !== "W") {
          if (grid[x][j] === "E") {
            console.log("Killed one at ", x, j);
            enemiesKilledHere++;
          }
          j--;
        }
        console.log("Killed ", enemiesKilledHere, "Max ", enemiesKilled);
        if (enemiesKilledHere > enemiesKilled) {
          enemiesKilled = enemiesKilledHere;
        }
      }
    }
  }
  return enemiesKilled;
}
