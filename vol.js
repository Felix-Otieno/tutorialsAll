class Table {
    constructor(x, y) {
        console.log("This is a beautiful table imported from China.");
        this.x = x;
        this.y = y;
    }
    funGud() {
        console.log(this.y, this.x);
    }
        

}

let obj = new Table(5, 7);
console.log(obj.y);
console.log(obj.x);
obj.funGud()