// - Maps hold key-value pairs and remembers the original insertion order of keys
// - Any value whether primitive or objects may be used as keys or values
// - Maps are similar to objects pertaining to key-value pairs, but regular JavaScript objects
//   only support 1 object used as a key
//   - If more key objects are added, the last one and its corresponding value is used
//     - We can use Maps to avoid this behavior

// Using Arrays As Key-Value Pairs In Map
const container_1 = () => {
  const myMap = new Map([['name', 'Tommy'], ['surname', 'Son']]);

  console.log('container_1 -> myMap:', myMap);    // Map(2) { 'name' => 'Tommy', 'surname' => 'Son' }
};

// Demonstrate Regular Object's Support Of 1 Object Used As A Key
const container_2 = () => {
  const myObject = {};

  const keyObject_1 = {};
  const keyObject_2 = {};

  // 1) Assign keyObject_1 object as a key to myObject
  myObject[keyObject_1] = 'keyObject_1';

  console.log('container_2 -> 1) myObject:', myObject);  // { '[object Object]': 'keyObject_1' }

  // 2) Assign keyObject_2 object as a key to myObject
  myObject[keyObject_2] = 'keyObject_2';

  console.log('container_2 -> 2) myObject:', myObject);  // { '[object Object]': 'keyObject_2' }
};

// Use Maps To Demonstrate Multiple Objects Used As Keys
const container_3 = () => {
  const keyObject_1 = {};
  const keyObject_2 = {};

  const myMap = new Map([[keyObject_1, 'keyObject_1'], [keyObject_2, 'keyObject_2']]);

  console.log('container_3 -> myMap:', myMap);   // Map(2) { {} => 'keyObject_1', {} => 'keyObject_2' }
};

// Add Key Value Pairs To Map
const container_4 = () => {
  const myMap = new Map([[{}, 'A'], [{}, 'B']]);

  myMap.set({}, 'C');

  console.log('container_4 -> myMap:', myMap);   // Map(3) { {} => 'A', {} => 'B', {} => 'C' }
};

// Delete Key Value Pairs From Map
const container_5 = () => {
  const myMap = new Map([[1, 1]]);

  // 1) Use delete method
  myMap.delete(1);

  console.log('container_5 -> 1) myMap:', myMap);   // Map(0) {}

  // 2) Use clear method
  myMap.set('$100', 100);

  console.log('container_5 -> 2) myMap:', myMap);   // Map(1) { '$100' => 100 }

  myMap.clear();

  console.log('container_5 -> 2) myMap:', myMap);   // Map(0) {}
};

// Query A Map
const container_6 = () => {
  const myMap = new Map([[1, 'one'], [2, 'two']]);

  console.log('container_6 -> myMap.has(1):', myMap.has(1));
  console.log('container_6 -> myMap.has(3):', myMap.has(3));
  console.log('container_6 -> myMap.has(\'one\'):', myMap.has('one'));
  console.log('container_6 -> myMap.size:', myMap.size);
};

// container_1();
// container_2();
// container_3();
// container_4();
// container_5();
container_6();