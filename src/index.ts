// let sales = 123_456_789;
// let course = "TypeScript";
// let is_published = true;
// let level;

// let user: [number, string, boolean, number] = [1, 'Mosh', true, 0];
// user.push(1);

//const small = 1;
//const medium = 2;
//const large = 3;

// const enum Size {Small = 1, Medium, Large};
// let mySize: Size = Size.Medium;
// console.log(mySize);

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022)
     return income * 1.2;
   return income * 1.3;
}

calculateTax(10_000);
