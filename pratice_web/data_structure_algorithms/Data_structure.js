// var x: number;
// var y: number;
// var arrnum: number[] = [1, 2, 3, 4, 53, 6];
// x = 4;
// y = 1.1;
// var c: number = Math.sqrt(x);
// var z = Math.sqrt(y);
// for (let i = 0; i < arrnum.length; i++) {
//   console.log(arrnum[i]);
// }
// console.log(c);
// console.log(z);
// class checking {
//   protected amount: number;
//   private balance: number = 1000;
//   constructor(amount: number) {
//     this.amount = amount;
//   }
//   deposit(amount_depo: number): number {
//     return (this.balance += amount_depo);
//   }
//   redraw(amount_redraw: number): void {
//     var amout_bala = this.balance - amount_redraw;
//     console.log(`Amount is redraw ${amout_bala}`);
//   }
// }
// var bank = new checking(120);
// bank.redraw(200);
//Arrays
// var names: Array<string> = [
//   "coded",
//   "spartan",
//   "Mohammed",
//   "Yussif",
//   "G14",
//   "MacbookPro 16",
// ];
// var name_ = prompt("enter a name");
// var pos = names.indexOf(name_);
// if (pos >= 0) {
//   console.log(`the name ${name_} is found in position ${pos}`);
// } else {
//   console.log(`${name_} not found in array`);
// }
// Arrays - Creating new arrays from exsiting arrays
// var namestr = names.join();
// var another = ["A", "B", "c", "D"];
// console.log(namestr);
// console.log(namestr.toString());
// var nam1 = names.concat(another);
// console.log(nam1);
// Arrays - Mututor Functions
// Adding elements to an Array
// var nums = [1, 2, 3, 4, 5, 6, 7];
// console.log(nums);
// nums.push(223);
// console.log(nums);
// adding elements to the first index of an array
// nums.unshift(0);
// console.log(nums);
// removing elements
// nums.pop(); // remove last element
// // console.log(nums);
// nums.shift();
// // console.log(nums);
// nums.splice(3, 1);
// console.log(nums);
// reverse, sort for arranging arrays
// iterators function
// Non-Array iterators functions
// Foreach, every, some, reduce
// Iterator Functions That Return a New Array
// function curve(grade) {
//   return (grade += 5);
// }
// var grades = [77, 65, 81, 92, 83];
// var newgrades = grades.map(curve);
// console.log(newgrades);
//Two di-Array
// class twoArry {
//   public num_Rows: number;
//   public num_col: number;
//   public init: any;
//   public arr = [];
//   public col = [];
//   Constructor(numRows: number, numcol: number, init: any) {
//     this.num_Rows = numRows;
//     this.num_col = numcol;
//     this.init = init;
//   }
//   mat(): any {
//     for (let i = 0; i <= this.num_Rows; i++) {
//arr[i] =[];
//       for (let j = 0; j <= this.num_col; j++) {
//         this.col[j] = this.init;
//       }
//       this.arr[i] = this.col;
//     }
//     return this.arr;
//   }
// }
// var names = new twoArry();
// names[1][1] = 2;
// console.log(names[1][1]);
// Q 1
// Create a grades object that stores a set of student grades in an object.Provide a
// function for adding a grade and a function for displaying the student’s grade average.
// class student_grades {
//   protected stu_gr: Array<number> = [];
//   gra_add(grade): void {
//     this.stu_gr.push(grade);
//   }
//   dispay(): number {
//     var total = 0;
//     for (let i = 0; i < this.stu_gr.length; i++) {
//       total += this.stu_gr[i];
//     }
//     return total / this.stu_gr.length;
//   }
// }
// var student1 = new student_grades();
// student1.gra_add(2);
// student1.gra_add(5);
// student1.gra_add(3);
// student1.gra_add(23);
// student1.gra_add(13);
// student1.gra_add(112);
// student1.gra_add(11);
// console.log(student1.dispay());
// class Stack {
//   top: number = 0;
//   storage: any = [];
//   pop() {
//     return this.storage[--this.top];
//   }
//   push(element: any) {
//     this.storage[++this.top] = element;
//   }
//   peek() {
//     return this.storage[this.top - 1];
//   }
//   clear() {
//     this.top = 0;
//   }
//   length() {
//     return this.top;
//   }
// }
// var s = new Stack();
// s.push("David");
// s.push("Raymond");
// s.push("Bryan");
// console.log("length: " + s.length());
// console.log(s.peek());
// var popped = s.pop();
// console.log("The popped element is: " + popped);
// console.log(s.peek());
// s.push("Cynthia");
// console.log(s.peek());
// s.clear();
// console.log("length: " + s.length());
// console.log(s.peek());
// s.push("Clayton");
// console.log(s.peek());
//  Link_List
var Node_ = /** @class */ (function() {
    function Node_(Data) {
        this.data = Data;
    }
    Node_.prototype.countNode = function(head) {
        var count = 0;
        var current = head;
        while (current.next !== null) {
            current = current.next;
            count++;
        }
        return count;
    };
    return Node_;
}());
var ll = new Node_(6);
var rl = new Node_(3);
var el = new Node_(7);

let dis;