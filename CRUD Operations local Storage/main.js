let data = [
    {
        id: 1, name: "sonu", email: "kushsonu@gmail.com"
    },
    {
        id: 2, name: "sushil", email: "sushil@gmail.com"
    }
]

function realAll() {
    localStorage.setItem("object", JSON.stringify(data));
    let tableData = document.querySelector(".data_table");

    let object = localStorage.getItem("object");
    let objectData = JSON.parse(object);

    let elements = "";

    objectData.map(record => {
        elements += `
        <tr>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>
        <button>Edit</button>
        <button>Delete</button>
        </td>
        </tr>
        `
    })

    tableData.innerHTML = elements;
}

function create(){
 document.querySelector(".create_form").style.display ="block";
 document.querySelector(".add_div").style.display ="none";
}

function add(){
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;

    let newObj = {id:3, name:name, email:email};
    data.push(newObj);

    document.querySelector(".create_form").style.display ="none";
    document.querySelector(".add_div").style.display ="block";

    realAll();
}