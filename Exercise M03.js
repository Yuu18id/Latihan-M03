let show = function (data) {
    let arr = JSON.parse(data);
    arr = arr[0]
      
    document.getElementById("id").innerHTML = arr.id;
    document.getElementById("name").innerHTML = arr.name;
    document.getElementById("username").innerHTML = arr.username;
    document.getElementById("email").innerHTML = arr.email;
    document.getElementById("city").innerHTML = arr.address.city;
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
                show(xhr.responseText);
            }
        };
        xhr.open("GET", link);
        xhr.send();
    }
    catch (e) {
        console.log(e)
    }
}
load();