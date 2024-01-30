let isEdit = false;
let index;


const getData = () => {

    const datas = JSON.parse(localStorage.getItem('users'));

    if (datas != null) {

        return datas;

    } else {

        return [];

    }
}

const data = getData();

const display = () => {

    const myData = getData();
    console.log(",", myData);

    if (myData.length != 0) {

        myData.forEach((d, index) => {

            dataTable.innerHTML += `<tr><td>${d.id}</td><td>${d.name}</td><td>${d.email}</td><td>${d.contact}</td><td>${d.age}</td><td><button onclick="return handleEdit(${d.id})">Edit</button></td></tr>`;

        })
    } else {
        dataTable.innerHTML = "No data Found"

    }
}

display();


const formSubmit = () => {

    event.preventDefault();


    let username = uname.value;
    let useremail = email.value;
    let usercontact = contact.value;
    let userage = age.value;
    let path = image.value;


    if (isEdit) {

        let obj = {
            name: username,
            email: useremail,
            contact: usercontact,
            age: userage,
            id: index,
            path

        }

        console.log("Edit data = ",index);

        const updatedData = data.map((user) =>{

            if(index == user.id){
                return user = obj
            }else{
                return user
            }

        })

        console.log("updatedData",updatedData);
        localStorage.setItem("users", JSON.stringify(updatedData));


    } else {


        let uid = data.length + 1;


        let dataObje = {
            name: username,
            email: useremail,
            contact: usercontact,
            age: userage,
            id: uid,
            path
        }

        data.push(dataObje);

        localStorage.setItem("users", JSON.stringify(data));
        console.log(data);
    }
    
    dataTable.innerHTML = '';
    display();

    uname.value = '';
    email.value = '';
    contact.value = '';
    age.value = '';
    image.value= '';
}

const clearData = () => {

    localStorage.removeItem('users');
    display();

}

const handleEdit = (id) => {
    console.log("Edit....", id);

    const sigleRecord = data.filter((user) => {
        return id == user.id;

    })

    const record = sigleRecord[0];

    uname.value = record.name;
    email.value = record.email;
    contact.value = record.contact;
    age.value = record.age;
    image.value = record.path

    isEdit = true;
    index = id;

}