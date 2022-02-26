// - The "Set" object allows you to store unique values of any type whether primitive values or object references
//
// - Differences between Arrays and Sets:
//   - Arrays are an ordered list of elements that are accessible with their specific index positions
//   - Sets are an unordered pool of unique elements; hence no index accessing
//   - Sets do not replace Arrays!
//     - Sets are useful if you know, in advance, that you plan to avoid duplicate values

// Array and Set Conversion
const container_1 = () => {
  // 1) Turn an array into a Set object containing only unique values
  const myArray = [1, 2, 2, 3, 4, 5, 5, 6];
  const mySet = new Set(myArray);

  console.log('container_1 -> 1) myArray:', myArray);         // [1, 2, 2, 3, 4, 5, 5, 6]
  console.log('container_1 -> 1) mySet:', mySet);             // Set(6) { 1, 2, 3, 4, 5, 6 }

  // 2) Turn a Set object into an array containing only unique values
  const uniqueArray = [...mySet];

  console.log('container_1 -> 2) uniqueArray:', uniqueArray); // [1, 2, 3, 4, 5]
};

// Add Things Into A Set
const container_2 = () => {
  const myArray = [1, 2, 3, 4, 5];
  const mySet = new Set(myArray);

  console.log('container_2 -> myArray:', myArray);     // [1, 2, 3, 4, 5]
  console.log('container_2 -> mySet:', mySet);         // Set(5) { 1, 2, 3, 4, 5 }

  // 1) Add integer to Set
  mySet.add(6);

  console.log('container_2 -> 1) mySet:', mySet);      // Set(6) { 1, 2, 3, 4, 5, 6 }

  // 2) Add string to Set
  mySet.add('7');

  console.log('container_2 -> 2) mySet:', mySet);      // Set(7) { 1, 2, 3, 4, 5, 6, '7' }

  // 3) Add object to Set
  mySet.add({ name: 'Tommy Son', hobby: 'Go' });

  console.log('container_2 -> 3) mySet:', mySet);      // Set(8) { 1, 2, 3, 4, 5, 6, '7', { name: 'Tommy Son', hobby: 'Go' } }

  // 4) Add array to Set
  mySet.add([2, 0, 2, 2]);

  console.log('container_2 -> 4) mySet:', mySet);      // Set(9) { 1, 2, 3, 4, 5, 6, '7', { name: 'Tommy Son', hobby: 'Go' }, [ 2, 0, 2, 2 ] }
};

// Removing Things From A Set
const container_3 = () => {
  const myArray = [1, 2, 3, 4, 5];
  const mySet = new Set(myArray);

  console.log('container_3 -> myArray:', myArray);     // [1, 2, 3, 4, 5]
  console.log('container_3 -> mySet:', mySet);         // Set(5) { 1, 2, 3, 4, 5 }

  // 1) Delete the value 3 from Set
  mySet.delete(3);

  console.log('container_3 -> 1) mySet:', mySet);      // Set(4) { 1, 2, 4, 5 }

  // 2) Delete everything from Set
  mySet.clear();

  console.log('container_3 -> 2) mySet:', mySet);      // Set(0) {}
};

// Querying A Set
const container_4 = () => {
  const myArray = [1, 2, 3, 4, 5];
  const mySet = new Set(myArray);

  console.log('container_4 -> myArray:', myArray);     // [1, 2, 3, 4, 5]
  console.log('container_4 -> mySet:', mySet);         // Set(5) { 1, 2, 3, 4, 5 }

  // 1) Check if Set has value 5
  const hasValue_5 = mySet.has(5);

  console.log('container_4 -> 1) mySet.has(5):', hasValue_5);  // true

  // 2) Check if Set has value 6
  const hasValue_6 = mySet.has(6);

  console.log('container_4 -> 2) mySet.has(6):', hasValue_6);  // false

  // 3) Check size of Set
  const size = mySet.size;

  console.log('container_4 -> 3) mySet.size:', size);          // 5
};

// container_1();
// container_2();
// container_3();
// container_4();