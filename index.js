// #JSON
/*
const student = {
  name: "John",
  age: 27,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
  sayHi: function () {
    console.log(this.name);
  },
};
*/
//แปลงเป็น json
//JSON.stringify(jsobj)  => string
//JSON.parse(json)  => obj
/*
console.log(student);
console.log(typeof student);
student.sayHi();
*/
/*
const studentJSON = JSON.stringify(student);
console.log(studentJSON);
console.log(typeof studentJSON);
//เปลี่ยนเสมือน
/*   `
{"name":"John","age":27,"isAdmin":false,"courses":["html","css","j
s"],"wife":null}
     ` */
/*     
const studentJSON = JSON.stringify(student);
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);
*/

//HTTP Request
// built-in: fetch fn
// fetch api

// ส่ง request ไปยัง endpoint

/*
// 1.GET ALL
let BASE_URL = "https://jsonplaceholder.typicode.com";
let endpoint = BASE_URL + "/posts";
let opiton = {
  method: "GET",
};
*/

// 2.GET ByID /1 /2 /3 เลขของไอดี
let BASE_URL = "https://jsonplaceholder.typicode.com";
let endpoint = BASE_URL + "/posts/20";
let opiton = {
  method: "GET",
};

/*
// 3.GET Comment
let BASE_URL = "https://jsonplaceholder.typicode.com";
let endpoint = BASE_URL + "/posts/1/comments";
let opiton = {
  method: "GET",
};
*/

/*
let BASE_URL = "https://jsonplaceholder.typicode.com";
// 4.GET Comment by Query
let endpoint = BASE_URL + "/comments?postid=1";
let opiton = {
  method: "GET",
};
*/

//  POST : post
/*
let BASE_URL = "https://jsonplaceholder.typicode.com";
let endpoint = BASE_URL + "/posts";
let opiton = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Test",
    sound: "soundcheck",
  }),
};
*/

// 6. PUT
/*
let BASE_URL = "https://jsonplaceholder.typicode.com";
let endpoint = BASE_URL + "/posts/16";
let opiton = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    phone: "066-666-6666",
  }),
};
*/

//7. PATCH
/*
let BASE_URL = "https://jsonplaceholder.typicode.com";
let endpoint = BASE_URL + "/posts/16";
let opiton = {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    phone: "066-666-6666",
  }),
};
*/

//8.DELETE
/*
let BASE_URL = "https://jsonplaceholder.typicode.com";
let endpoint = BASE_URL + "/posts/16";
let opiton = {
  method: "DELETE",
};
*/
// ส่ง get request ไปยัง endpoint => Promise
/*
function sendRequest() {
  fetch(endpoint, opiton)
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
sendRequest();
*/

async function sendRequest() {
  try {
    let result = await fetch(endpoint, opiton);
    let data = await result.json();
    console.log(data);
  } catch {
    console.log(error);
  }
}
sendRequest();

// HTTP METHOD G P P P D
// https://jsonplaceholder.typicode.com = Endpoint
// https://jsonplaceholder.typicode.com/posts/16 =  Path Parameter
// https://jsonplaceholder.typicode.com/posts=1 = Query Params
// แปลง Javascritp OBJ ใช้ stringify
// แปลง Json OBJ ใช้ parse
