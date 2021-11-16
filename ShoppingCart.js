$(document).ready(function () {
  ajax();
});
function ajax() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("list").innerHTML = this.response;

      $("#example").DataTable({
        data: JSON.parse(this.response).data,
        "paging":   false,
        columns: [
            {},
          { data: "SNo" },
          { data: "Item" },
          { data: "Quantity" },
          { data: "Unit" },
          { data: "Department" },
        ],
        columnDefs: [
          {
            targets: 0,
            searchable: false,
            orderable: false,
            className: "dt-body-center",
            render: function (data, type, full, meta) {
              return (
                '<input type="checkbox" name="id[]" value="' +
                $("<div/>").text(data).html() +
                '">'
              );
            },
          },
        ],
      });
    }
  };
  xhttp.open("GET", "grocerylist.json", true);
  xhttp.send();
}
