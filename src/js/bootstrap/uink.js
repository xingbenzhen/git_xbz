function uinik(name) {
    var text = window.location.search
    var text2 = text.slice(1);
    var text3 = text2.split("&")
    for (var i = 0; i < text3.length; i++) {
        if (name == text3[i].split("=")[0]) {
            return decodeURI(text3[i].split("=")[1])
        }

    }
}