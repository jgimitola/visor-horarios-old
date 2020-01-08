//Just modify these constants.
const codPeriodo = "202010";
const namePeriodo = "Primer Semestre 2020";
const codNivel = "PR";
const nameNivel = "Pregrado";

//Don't modify below.
const materias_input = $(".mat");
const inputs = $("form > input");
setForm();

var fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', function (e) {
    var file = fileInput.files[0];
    var textType = /text.*/;

    if (file.type.match(textType)) {
        var reader = new FileReader();

        reader.onload = function (e) {
            let content = reader.result;
            let nrcs = content.split(",");
            let tnrcs = $("div > input.in");
            for (let i = 0; i < 7; i++) {
               tnrcs[i].value = nrcs[i];
            }
        }
        reader.readAsText(file);
    }
});

function setForm() {
    inputs[2].value = codPeriodo;
    inputs[3].value = namePeriodo;
    inputs[4].value = codNivel;
    inputs[5].value = nameNivel;
}

function getNRCS() {
    let tnrcs = $("div > input.in");
    let nrcs = [];
    for (let i = 0; i < tnrcs.length; i++) {
        nrcs.push(tnrcs[i].value);
    }
    return nrcs;
}

function mostrarMaterias(nrcs) {
    for (let i = 0; i < nrcs.length; i++) {        
        $("#target").attr("target", materias_input[i].getAttribute("name"));
        inputs[1].value = nrcs[i];
        $("#target").submit();
    }
}

function consultar() {
    let nrcs = getNRCS();
    mostrarMaterias(nrcs);
    setInterval(function () {
        mostrarMaterias(nrcs);
    }, 120000);
}