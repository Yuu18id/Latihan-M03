let a = function(response){
    data = JSON.parse(response);
    var trHTML = "";
    data.forEach(item => {
      trHTML +=
        "<tr><td><a href=http://"+item.website+" title = "+item.company.name+">"+item.id +
        "</a></td><td>" +
        item.name +
        "</td><td>" +
        item.username +
        "</td></td>"+
        "</td><td>"+
        item.email +
        "</td><td>" +
        item.address.city +
        "</td></tr>";
    });
    let dat = document.getElementById("table").innerHTML;
    document.getElementById("table").innerHTML = dat+trHTML;
  }
  let load = function () {
    let link = "https://jsonplaceholder.typicode.com/users";
    let xhr;
    xhr = new XMLHttpRequest();
    try {
      xhr = new XMLHttpRequest();
      if (!xhr) return -1;
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          a(xhr.responseText);
        }
      };
      xhr.open("GET", link);
      xhr.send();
    }catch (e) {
      console.log(e);
    }
  };
  load();
