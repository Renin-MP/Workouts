console.log(" JS is working");


var fruits = [ "apple","orange","mango","kiwi","grapes"]
for(var i=0; i<=fruits.length-1;i++){
    console.log( `index of ${i}: value is ${fruits[i]}`);
}



// // revers loop

// for( var i=fruits.length-1; i>=0;i--){
//     console.log(`fruits in index ${i} is ${fruits[i]}`);
    
// }



// array of objects 
var books=[
    {
        bookName:"Daydream",
        bookPrice:799,
        author:"HANNAH GRACE"
    },
    {
        bookName:"Betrayal Road",
        bookPrice:1299,
        author:"Christine Feehan"
    },
    {
        bookName:"The Grandest Game",
        bookPrice:1999,
        author:"Jennifer Lynn Barnes"
    },
    {
        bookName:"The Crimson Crown",
        bookPrice:2499,
        author:"Jennifer Lynn Barnes"
    }
]

for(var i=0; i<=books.length-1;i++){
    
    if(books[i]. bookPrice> 1000){
        console.log(`books having price > 1000 is ${books[i].bookName} `);

    }
//  wap= booksname >14 charecters
}
    for(var i=0;i<=books.length-1;i++){
        if(books[i].bookName.length >14){
            console.log(`books name having > 14 is ${books[i].bookName} `);
            
            
        }
    
}

// wap = all the book print name 

for(var i=0;i<=books.length-1;i++){
    if(books[i].author== "Jennifer Lynn Barnes"){
        console.log(`books from Jennifer Lynn Barnes is ${books[i].bookName} `);
        

    }


}

for(var i=0;i<=books.length-1;i++){
    if(books[i].author== "Jennifer Lynn Barnes"){
        console.log(`books name having author name  Jennifer Lynn Barnes is ${books[i].bookName} `);
        

    }


}
var Str= malayalam


var revStr = ""

for( var i  = Str.length-1; i <=0; i--){
    console.log(Str[i]);
    revStr =revStr+=Str[i]

    
}

console.log("revStr after revStr ",revStr );
console.log(revStr=== str?"it is a palindrome ": "not palindrome");

