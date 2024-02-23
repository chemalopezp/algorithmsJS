function totalFruit(fruits: number[]): number {
  let startingTree = 0;
  const numFruitsEachTree = [];
  while (startingTree < fruits.length) {
    let basketType: [number | null, number | null] = [null, null];
    let basketFruitPicked: [number, number] = [0, 0];
    for (let i = startingTree; i < fruits.length; i++) {
      if (basketType[0] === null || basketType[0] === fruits[i]) {
        basketType[0] = fruits[i];
        basketFruitPicked[0]++;
      } else if (basketType[1] === null || basketType[1] === fruits[i]) {
        basketType[1] = fruits[i];
        basketFruitPicked[1]++;
      }
    }
    const numFruits = basketFruitPicked.reduce((acc, cv) => acc + cv, 0);
    numFruitsEachTree.push(numFruits);
    startingTree++;
  }
  return Math.max(...numFruitsEachTree);
}
