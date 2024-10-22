class Car {
    constructor(brandName,Price){
        this.brandName = brandName;
        this.Price = Price
    }
}



//  to inherit form car class use extends

class Model extends Car{
    constructor(brandName,Price,ModelName){
        //  supper is used to call the constructor of the parent class
        super(brandName,Price)
        this.ModelName=ModelName
    }

}

let myCar = new Car ("BMW",50000)
console.log("myCar",myCar);

let  myNewModelCar = new Model ("Benz",80000,"flying supr")
console.log("myNewModelCar",myNewModelCar);
