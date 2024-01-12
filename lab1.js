//bài 2
let name = "Nguyen Phu Em";

let birthday = "2001/01/01";

let name1 = "Nguyen VAn Phu Anh";

let birthday1 = "2003/01/01"

let sayHello = () => {
    console.log(`I'm ${name}, ${birthday}`);
}


let sayHello1 = () => {
    console.log(`I'm ${name1}, ${birthday1}`);
}

sayHello();
sayHello1();

//bài 3

fetch("https://api.publicapis.org/entries")
    .then(function(response){
        response.json().then(function(data){
            let array = data.entries;
            let tbody = "";
            array.forEach(element => {
                tbody += `<tr>
                    <td>${element.API}</td>
                    <td>${element.Category}</td>
                    <td>${element.Description}</td>
                    <td>${element.HTTPS}</td>
                </tr>;`
            });
            let html = document.getElementById('123');
            html.innerHTML = tbody;
            
            
        })
    })

//bài 4
// fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
//     .then(function(response){
//         let i = 0;
//         response.json().then(function(data){
//             console.log(data);
//             let array = data.data ;
            
//             array.forEach(element => {
                
//             });
//         })
//     })