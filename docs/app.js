async function update() {
    // Fetch all releases and update the <ul> label  
    var requestOptions = {
        method: 'GET'
    };
    fetch("https://api.paulduan.tk/oscs/getReleases", requestOptions)
    .then(res => res.json().then(
        data => {
            console.log(data);
            var list = data[0].assets;
            var publish_time = new Date(data[0].published_at).toString();

            document.getElementById("update-time").innerText = publish_time;
            for (var i = 0; i < list.length - 1; i++) {
                var ul = document.getElementById("list");
                var li = document.createElement("li");
                li.setAttribute("onclick", "select(event)");
                li.setAttribute("ondblclick", "view(event)");
                var icon = document.createElement("div");
                icon.className = "pdf-icon";
                var div = document.createElement('div');
                div.innerText = `${list[i].name}`;
                li.appendChild(icon);
                li.appendChild(div)
                ul.appendChild(li);
             }
        }
    ))
}