const circular = (input) => {
  // Track elements hit by algorithm
  const properties = { circular: false, complete: false };
  const hit = input.map(element => element = false);

  // Loop through the algorithm
  let i = 0;
  while (!hit[i]) {
    // Mark i as hit
    hit[i] = true;
    console.log('hit', hit);
    // Advance to the next element
    i += input[i] % input.length; // Allows to move over the border
    // If we have already hit an element --> Circular
    if (hit[i]) {
      properties.circular = true;
      // Check if all of them have been hit --> Complete
      const notHit = hit.filter(element => element === false);
      console.log('NotHit', notHit);
      if (notHit.length === 0) {
        properties.complete = true;
      }
    }
  }

  return properties;
};

console.log(circular([1, 2, -6, -1]));
