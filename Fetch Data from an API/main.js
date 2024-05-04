async function getData(){
    const data = await fetch("https://dummyjson.com/users");
    const records = await data.json();

    let tab = "";
    records.users.forEach(function(user){
        tab += `<tr>
        <td>${user.firstname}</td>
        <td>${user.lastname}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
        <td>${user.gender}</td>
        </tr>
        `
    });
    document.getElementById("tbody").innerHTML = tab;
}