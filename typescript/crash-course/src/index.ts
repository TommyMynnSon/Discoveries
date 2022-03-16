// Basic Types
let myAge: number = 26;
let myName: string = 'Tommy';
let isSingle: boolean = false;

let x: any = 'Hello';
x = 2022;

// Arrays
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, '2', false, { value: 4 }];

// Tuple
let person: [number, string, boolean] = [1, 'Tommy', true];

// Tuple Array
let employee: [number, string][];

employee = [
  [1, 'Tommy'],
  [2, 'Janelle']
];

// Union
let pid: string | number = 22;
pid = '22';

// Enum
enum Direction1 {
  Up = 1, // 1, but 0 by default
  Down,   // 2, but 1 by default
  Left,   // 3, but 2 by default
  Right   // 4, but 3 by defeault
};

console.log('Direction1.Left:', Direction1.Left);

enum Direction2 {
  Up = ' Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
};

console.log('Direction2.Left:', Direction2.Left);

// Objects

// - Ugly Way
const user1: {
  id: number,
  name: string
} = {
  id: 301232950,
  name: 'Tommy Son'
};

// - Clean Way
type User2 = {
  id: number,
  name: string
};

const user2: User2 = {
  id: 301232950,
  name: 'Tommy Son'
};

// Type Assertion
let cid: any = 1;

// - First Way 
// let customerId = <number>cid;
// customerId = '1'; // Produces error which we want

// - Second Way
// let customerId = cid as number;
// customerId = '1'; // Produces error which we want

// Functions

// -------------------------------------
//                                      | type of return value
//                                      V
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 1));

function log(message: string | number): void {
  console.log(message);
}

log('Hello World!');
log(2022);

// Interfaces

// - Objects
interface UserInterface {
  readonly id: number  // Add `readonly` to make property not mutatable
  name: string
  age?: number          // Add '?' to make property optional
}

const tommy: UserInterface = {
  id: 301232950,
  name: 'Tommy Son'
};

// tommy.id = 1;        // Produces an error since `id` is `readonly`

// - Functions
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => {
  return x + y;
};

// - You can't use `interface` with primitives or unions
// The example below is not able to be expressed with an `interface`:
// type Point = number | string;

// Classes
class Person {
  private id: number
  name: string           // `public` by default
  protected age: number

  constructor(id: number, name: string, age: number) {
    console.log(`Person object created with id = ${id}, name = ${name}, and age = ${age}.`);
    this.id = id;
    this.name = name;
    this.age = age;
  }

  register() {
    return `${this.name} is now registered.`;
  }
}

const tommySon = new Person(301232950, 'Tommy Son', 26);
// tommySon.id = 69;            // Produces error as `id` property is `private`
// console.log(tommySon.age);   // Produces error as `age` property is `protected`

console.log(tommySon);
console.log(tommySon.register());

// - Using `implements` with interfaces
interface SquareInterface {
  width: number
  height: number
  color: string
  getArea(): number
}

class FirstSquare implements SquareInterface {
  width: number
  height: number
  color: string

  constructor(width: number, height: number, color: string) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea() {
    return this.width * this.height;
  }
}

// - Using `extends` on `SquareInterface` to create a subclass
class SpecialSquare extends FirstSquare {
  position: string

  constructor(width: number, height: number, color: string, position: string) {
    super(width, height, color);
    this.position = position;
  }
}

const aSpecialSquare = new SpecialSquare(5, 10, 'Blue', 'North');

console.log(aSpecialSquare.width);
console.log(aSpecialSquare.getArea());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['A', 'B', 'C', 'D']);