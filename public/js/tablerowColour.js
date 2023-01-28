let selectedRows = JSON.parse(sessionStorage.getItem("selectedRows")) || [];

function color() {
  let rowId = event.target.parentNode.parentNode.parentNode.id;
  let row = document.getElementById(rowId);
  if (!selectedRows.includes(rowId)) {
      selectedRows.push(rowId);
      sessionStorage.setItem("selectedRows", JSON.stringify(selectedRows));
      row.style.backgroundColor = "lightgrey";
  }
}

window.onload = function() {
    let selectedRows = JSON.parse(sessionStorage.getItem("selectedRows")) || [];
    for(let i = 0; i < selectedRows.length; i++) {
        let row = document.getElementById(selectedRows[i]);
        row.style.backgroundColor = "lightgrey";
    }
};

function sessionClear(){
  sessionStorage.clear();
}


