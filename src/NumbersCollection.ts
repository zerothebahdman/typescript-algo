/** use this to sort array of numbers (numbers[]) */

export class NumbersCollection {
  constructor(public data: number[]) {}

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] < this.data[rightIndex];
  }

  /* the get key word will return the length not as a method (.length()) but as (.length)*/
  get length(): number {
    return this.data.length;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHandSide = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHandSide;
  }
}
