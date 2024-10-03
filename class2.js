class Leo {
    constructor(x, y) {
        console.log(x + y);
         this.x = x;
        this.y = y;
        

    }
    epicFun() {
        console.log("Good thing the writing is on the wall.");
    }
}
let leoObj = new Leo(4, 6);
console.log(leoObj.epicFun());
console.log(leoObj.x);
console.log(leoObj.y);