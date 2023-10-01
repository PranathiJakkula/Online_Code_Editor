function run(){
    let HTML = document.getElementById("html").value;
    let CSS = document.getElementById("css").value;
    let JAVASCRIPT = document.getElementById("js").value;
    let OUTPUT = document.getElementById("output");

    OUTPUT.contentDocument.body.innerHTML = HTML + "<style>" + CSS + "</style>";
    OUTPUT.contentWindow.eval(JAVASCRIPT);
}