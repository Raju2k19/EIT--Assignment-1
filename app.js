// // <-. Using the  method : ->
// // <-1. Using the connect method : connect element(+) ->

let firstName = "Mohammad Rejaul" 
let lastName = "Islam Raju"
let Name = firstName.concat(" ",lastName);
document.write( Name, "<br>" );




// // <-2. Using the push method : push method adds new items to end of the last items, as like (selim) ->

let friendList = ["Morsalin" , "Hanif" , "Antor"];
friendList.push("Selim");
document.write(friendList, "<br>");



// // <-3. Using the pop method : pop method removes items to end of the last items, as like(Antor) ->

let friendList1 = ["Morsalin" , "Hanif" , "Antor",];
friendList1.pop();
document.write(friendList1, "<br>");



// // <-4. Using the unShift method : unShift method adds new elements to the beginning of an array->
let subject1 = ["Math", "English", "Bangla", "Islam"];
subject1.unshift("Javascript");
document.write(subject1, "<br>");

// // <-5. Using the Shift method : shift method removes the first item of an array. ->
let subject = ["Math", "English", "Bangla", "Islam"]
subject.shift();
document.write(subject, "<br>");


// // <-6. Using the  method : slice method returns selected elements in an array, as a new array as like ['football', 'basketball']->
const games = ["cricket", "football" ,"basketball", "hocky", "hadudu" ];
const x1 = games.slice(1,3);
document.write(x1,"<br>");


// // <-6. Using the  method splice : ->
let number2 = [1,2,3,4,5,6,7,8,9];
number2.splice(2,5, 10, 11);
document.write(number2, "<br>");


// // <-7. Using the slice  method : ->
let fruitsName = ["asif", "mohotamim", "rakib", "ronju", "riyad" ];
let x = fruitsName.slice(1,3);
document.write(x, "<br>");


// // <-7. Using the  method  : ->
let number = [1,2,3,4,5,6,7,8,9]
number.reverse()
document.write(number, "<br>");



// <-8. Using the every metho  : ->
var marks = [ 40, 45, 37, 20];
let string = ['raju', 'modhu', 'morsalin', 'hanif']
var result = marks.every(function (num) {
    return num > 10;
})
document.write(result);

let result1 = marks.every(mark => mark >10 );
let result2 = marks.filter(mark => mark > 40);
let result3 = marks.find(mark => mark > 40);
let result4 = marks.map(mark => mark * 2);
let result5 = string.map(str => str);

document.write(result2, "<br>")
document.write(result3, "<br>")
document.write(result1, "<br>");
document.write(result4, "<br>")
document.write(result5, "<br>");