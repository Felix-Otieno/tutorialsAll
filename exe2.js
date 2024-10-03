class Car {
    constructor(brand, model) {
             this.brand = brand;
             this.model = model;
    }
    showCase() {
        console.log(this.brand, this.model);
    }
}
const carObj = new Car("Toyota", "Corrolla");
carObj.showCase()