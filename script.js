var selectedRow = null;

function onFormsubmit() {
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["fullname"] = document.getElementById("fullname").value;
  formData["empcode"] = document.getElementById("empcode").value;
  formData["salary"] = document.getElementById("salary").value;
  formData["city"] = document.getElementById("city").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullname;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.empcode;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.salary;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.city;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<a onclick="onEdit(this)">Edit</a>
                    <a onclick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("fullname").value = "";
  document.getElementById("empcode").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("city").value = "";
  selectRow = null;
}

function onEdit(td) {
  selectRow = td.parentElement.parentElement;
  document.getElementById("fullname").value = selectRow.cells[0].innerHTML;
  document.getElementById("empcode").value = selectRow.cells[1].innerHTML;
  document.getElementById("salary").value = selectRow.cells[2].innerHTML;
  document.getElementById("city").value = selectRow.cells[3].innerHTML;
}

function updateRecord(formData) {
  selectRow.cells[0].innerHTML = formData.fullname;
  selectRow.cells[1].innerHTML = formData.empcode;
  selectRow.cells[2].innerHTML = formData.salary;
  selectRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
  if (confirm("Are you sure you want to delete ? ")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}
