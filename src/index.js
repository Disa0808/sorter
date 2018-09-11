class Sorter {
  constructor() {
    // Default array is empty
    this.arr = [];

    // Default compare function
    this.compareFunction = function(a, b) {  
                   return a - b;
                };
   }
  
  add(element) {
    // Used standart array method for adding elements
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    // Used standart property array to get length
    return this.arr.length;
  }

  toArray() {
    // Return array
    return this.arr;
  }

  sort(indices) {
    indices.sort();

    // Create tmp array with INDICES elements
    var tmpArr = this.arr.filter((item, index) => {
      return indices.indexOf(index) > -1;
    });

    // Sort tmp array using user defined function or default (see constructor)
    tmpArr.sort(this.compareFunction);

    // Insert elements from tmp array back into array on correct positions
    for(let i = 0; i <= indices.length - 1; i++) {
      this.arr.splice(indices[i], 1, tmpArr[i]);
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;