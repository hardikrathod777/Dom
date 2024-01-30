let isEdit = false;
let index;

const getData = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    return users ? users : [];
}

const tbody = document.querySelector('#dataTable tbody');

const display = () => {
    const mydata = getData();
    tbody.innerHTML = '';

    if (mydata.length !== 0) {
        mydata.forEach((d, index) => {
            tbody.innerHTML += `<tr><td>${d.id}</td><td>${d.name}</td><td>${d.course}</td><td>${d.gender}</td><td>${d.phone}</td><td>${d.email}</td><td><button onclick="handleEdit(${d.id})" class="button2">Edit</button> <button onclick="handleDelete(${d.id})"  class="button1">Delete</button></td></tr>`;
        });
    } else {
        tbody.innerHTML = "<tr><td colspan='7'>No data Found</td></tr>";
    }
}

display();

const formSubmit = (event) => {
    event.preventDefault();

    let username = document.getElementById('uname').value;
    let usercourse = document.getElementById('ucourse').value;
    let genderInputs = document.getElementsByName("gender");
    let genderValue = null;
    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            genderValue = genderInputs[i].value;
            break;
        }
    }
    let userphone = document.getElementById('uphone').value;
    let useremail = document.getElementById('uemail').value;

    if (isEdit) {

        const mydata = getData();
        const updatedData = mydata.map(user => {
            if (index == user.id) {
                return {
                    name: username,
                    course: usercourse,
                    gender: genderValue,
                    phone: userphone,
                    email: useremail,
                    id: index,
                };
            } else {
                return user;
            }
        });
        localStorage.setItem("users", JSON.stringify(updatedData));
    } else {
    
        const uid = getData().length + 1;
        const dataObj = {
            name: username,
            course: usercourse,
            gender: genderValue,
            phone: userphone,
            email: useremail,
            id: uid,
        };
        const users = getData();
        users.push(dataObj);
        localStorage.setItem("users", JSON.stringify(users));
    }

    isEdit = false;
    index = undefined;
    document.getElementById('uname').value = '';
    document.getElementById('ucourse').value = 'Course';
    genderInputs.forEach(input => (input.checked = false));
    document.getElementById('uphone').value = '';
    document.getElementById('uemail').value = '';

    display();
}

const handleEdit = (id) => {
    const user = getData().find(u => u.id === id);
    if (user) {
        isEdit = true;
        index = id;
        document.getElementById('uname').value = user.name;
        document.getElementById('ucourse').value = user.course;
        document.getElementsByName('gender').forEach(input => {
            if (input.value === user.gender) {
                input.checked = true;
            }
        });
        document.getElementById('uphone').value = user.phone;
        document.getElementById('uemail').value = user.email;
    }
}

const handleDelete = (id) => {
    const users = getData();
    const updatedData = users.filter(user => user.id !== id);
    localStorage.setItem('users', JSON.stringify(updatedData));
    display();
}
