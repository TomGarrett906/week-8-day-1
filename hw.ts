/*
Question #1

Create a type to represent the following instances of `CTStudent` Also declare three 3 students below as type `CTStudent` and set their values  */

type CTStudent =  {
    id: string,
    name: string,
    age: number,
    isTired: boolean,
    projectsCompleted: string[],
    pet?: string
}

let student1: CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project","Weather Bug"],
    pet: 'dog'
}

let student2: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"]
}

let student3: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
} 

console.log(student2)

// Question #2
// Write a function that will accept a an object of type `Fruit`, the object of type Fruit could also be `null`. 
 //If their is a Fruit print the color of the fruit, otherwise print `You ate my fruit already` be sure to annoate 
 //the return type of the function  */

type Fruit={
    color:string,
    shape:string
  }
  
let apple:Fruit={color:"red", shape:"sphere"}
let eaten:Fruit|null=null
  
function myFruit(fruit: Fruit|null): void {
    if(fruit) {
        console.log(fruit.color)
    } else {
        console.log('You ate my fruit already')
    }
}

myFruit(apple)
myFruit(eaten)





// Question #3
// Create a Union Type named `Ebook` for `Book` and `DigitalBook` and create one instance of the new union type */
 type Book={
   isbn:string,
   title:string,
   author:string
 }

 type DigitalBook={
   fileType:string,
 }

type eBook = Book & DigitalBook
const myBook: eBook = {
      isbn: 'E.G.978-0-99-702549-1',
      title: "The Hobbit",
      author: "Tolkien",
      fileType: "Adventure"
}
console.log(myBook)

// Question #4
// Create a Type to represent a `ShopItem` that will fit the following rules. You may need to create additional structures

// - All ShopItems have an numeric id that can not be edited 
// - All ShopItems have a price
// - All ShopItems have a description
// - Some ShopItems have a color
// - All ShopItems have a Category represented with an enum 
//     - Possible Categories are `Shirts` `Shoes` `Pants` `Hats`
// - All ShopItems have a list of keywords used to help search for the ShopItem 
//     - For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]

// After Creating the `ShopItem` type create 3 items using this type */

type shopItem = {
    readonly id: number,
    price: number,
    description: string,
    color: string,
    keyWords: string[]
    category: Categories
}

enum Categories {
    shirts = 'shirt',
    shoes= 'shoe',
    pants = 'pants',
    hats = 'hat'
}
console.log(Categories)

const item1: shopItem = {
    id: 1,
    price: 25,
    description: "Ironman Arc Reactor T-shirt - Red",
    color: "red",
    keyWords: ["clothing", "superhero", "Ironman"],
    category: Categories.shirts
};

const item2: shopItem = {
    id: 2,
    price: 60,
    description: "Ironman-themed High-Top Sneakers",
    color: "gold",
    keyWords: ["footwear", "superhero", "Ironman"],
    category: Categories.shoes
};

const item3: shopItem = {
    id: 3,
    price: 45,
    description: "Ironman Helmet Replica",
    color: "silver",
    keyWords: ["collectible", "superhero", "Ironman"],
    category: Categories.hats
};

console.log(item1,item2,item3)