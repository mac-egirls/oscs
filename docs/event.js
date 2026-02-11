function select(event) {
    console.log(event);
    var li = event.target.parentNode;
    var ul = event.target.parentNode.parentNode;
    for (i = 0; i < ul.children.length; i++){
        if(ul.children[i] == li){
            ul.children[i].classList.add("selected");
            document.getElementById("preview").setAttribute("src",`./pdf-viewer/web/viewer.html?file=${event.target.innerText}`)
        }else{
            ul.children[i].classList.remove("selected")
        }
    }
}

function view(event) {
    var link = document.createElement('a');
    console.log(event);
    var name = event.target.innerText;
    link.href = `./pdf-viewer/web/viewer.html?file=${name}`;
    link.target = "_blank";
    link.click();
}

function downloadFile(){
    var selected = document.getElementsByClassName("selected");
    if (selected.length != 0){
        console.log(selected);
        var link = document.createElement('a');
        link.href = `https://github.com/mac-egirls/oscs/releases/download/latest/${selected[0].innerText}`
        link.target = "_blank";
        link.click();
    }else{
        alert("Please select one file")
    }
}

function openFile(){
    var selected = document.getElementsByClassName("selected");
    if (selected.length != 0){
        console.log(selected);
        var link = document.createElement('a');
        link.href = `https://github.com/mac-egirls/oscs/releases/download/latest/${selected[0].innerText}`
        link.target = "_blank"
        link.click();
    }else{
        alert("Please select one file")
    }
}

function openGitHub(){
    var link = document.createElement('a');
    link.href = 'https://github.com/mac-egirls/oscs'
    link.target = "_blank"
    link.click();
}
