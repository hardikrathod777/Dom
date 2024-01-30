const data = [

    {
        name: "Parth",
        email: "p@gmail.com",
        contact: "9465656865",
        age: 20,
        path: "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"

    }
    ,
    {
        name: "Ravi",
        email: "r@gmail.com",
        contact: "44465656865",
        age: 22,
        path: "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"

    },
    {
        name: "Arth",
        email: "a@gmail.com",
        contact: "8465656865",
        age: 25,
        path: "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"

    },
    {
        name: "Pares",
        email: "pa@gmail.com",
        contact: "8465556865",
        age: 26,
        path: "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"

    },
    {
        name: "Ronak",
        email: "r@gmail.com",
        contact: "94656564455",
        age: 18,
        path: "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"

    },
    {
        name: "Ronak",
        email: "r@gmail.com",
        contact: "94656564455",
        age: 18,
        path: "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"

    }



]

// for(let i=0; i<=data.length - 1; i++){

//     console.log(data[i].email);

//     dataTable.innerHTML += <tr><td>${i+1}</td><td>${data[i].name}</td><td>${data[i].email}</td><td>${data[i].contact}</td><td>${data[i].age}</td></tr>
// }

const display = () => {
    const tbody = document.querySelector('#dataTable tbody');
    
    tbody.innerHTML = '';

    data.forEach((d, index) => {
        tbody.innerHTML += `<tr><td><img src="${d.path}" width="50"/></td><td>${d.name}</td><td>${d.email}</td><td>${d.contact}</td><td>${d.age}</td></tr>`;
    });
}

const dataTable = document.getElementById('dataTable');

display();

const formSubmit = () => {
    event.preventDefault();

    let username = uname.value;
    let useremail = email.value;
    let usercontact = contact.value;
    let userage = age.value;
    let path = image.value;

    let dataObje = {
        name: username,
        email: useremail,
        contact: usercontact,
        age: userage,
        path
    }

    data.push(dataObje);

    display();
    console.log(data);

    uname.value = '';
    email.value = '';
    contact.value = '';
    age.value = '';
    image.value = '';
}
