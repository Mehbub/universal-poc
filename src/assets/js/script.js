function openCity(evt, type) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(type).style.display = "block";
    evt.currentTarget.className += " active";

    if(type=="Login")
    {
        document.getElementById("login_tab").style.display = "none";
        document.getElementById("register_tab").style.display = "block";
    }
    else if(type=="Register")
    {
        document.getElementById("register_tab").style.display = "none";
        document.getElementById("login_tab").style.display = "block";
    }
    
}






