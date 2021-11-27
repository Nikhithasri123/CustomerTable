
const cForm = document.getElementById('cForm');
cForm.addEventListener("submit", displaydetails);
const customers = [];

function displaydetails(event) {
    event.preventDefault();
    const cid = document.getElementById('cid').value;
    const name = document.getElementById('name').value;
    const num = document.getElementById('num').value;
    const address = document.getElementById('address').value;
    if (!cid || !name || !num || !address) {
        alert("please fill the details");
        return;
    }
    customers.push({cid, name, num, address});
    console.log(customers);
    const table = document.getElementById("myTable");
    const tHead = "<tr><th>Id</th><th>Name</th><th>Mobile.No</th><th>Address</th></tr>";
    var tRows = "";
    customers.forEach(function(customer,id){
        tRows = tRows + `<tr>
        <td>${customer.cid}</td>
        <td>${customer.name}</td>
        <td>${customer.num}</td>
        <td>${customer.address}</td>
        </tr>`
    })
    table.innerHTML = tHead + tRows;
    cForm.reset();
    // var newrow = table.insertRow(row);
    // var cell0 = newrow.insertCell(0);
    // var cell1 = newrow.insertCell(1);
    // var cell2 = newrow.insertCell(2);
    // var cell3 = newrow.insertCell(3);
    // cell0.innerTHML = cid;
    // cell1.innerTHML = name;
    // cell2.innerTHML = num;
    // cell3.innerTHML = address;
    // row++;



}