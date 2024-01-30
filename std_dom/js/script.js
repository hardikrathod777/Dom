const data = [
    {
        name: "hardik",
        gmail: "hr@gmail.com",
        contect: 3333333333,
        age: 18,

    },
    {
        name: "harsh",
        gmail: "h@gmail.com",
        contect: 4444444444,
        age: 19,

    },
    {
        name: "dhruvil",
        gmail: "dh@gmail.com",
        contect: 555555555,
        age: 20,

    },
    {
        name: "rakesh",
        gmail: "rk@gmail.com",
        contect: 6666666666,
        age: 21,

    },
]
var table = document.getElementById('datatime');
data.forEach((d,index) => {
    datatime.innerHTML += `<td>${index+1}</td><td>${d.name}</td><td>${d.gmail}</td><td>${d.contect}</td><td>${d.age}</td>`;
});