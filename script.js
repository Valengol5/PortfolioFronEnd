//ESTO ES DEL BOTON DE EDICION DEL ACERCA DE
function cambiar_parrafo(){
document.getElementById("edit-acercade").style.display="block";
let texto = document.getElementById("text-acercade").innerText;
console.log(texto);
};

function myFunction2(valor){
    document.getElementById("text-acercade").innerText = valor;
};


function logMessage(message){
    console.log(message + "<br>");
}

let textarea = document.getElementById("edit-acercade")
textarea.addEventListener('keyup', (e)=> {
    logMessage('Key "${e.key}" released [event: keyup]');
    if(e.key=="Enter"){
        document.getElementById("edit-acercade").style.display="none"
    }
});

function showFile(input){
    let file = input.files[0];
    alert(`File name: ${file.name}`);
    alert(`Last file: ${file.lastModified}`);

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (){
        console.log(reader.result);
        document.getElementById("text-acercade").innerText = reader.result;
    };
    reader.onerror = function(){
    console.log(reader.error);
    };
}

//seccion: Experiencia
//cuando toco el boton edit me aprecen los botones para editar cada item de la lista
var btn = document.getElementById("trigger-btn-edit-experience");
var exp = document.getElementById("btn-edit-experience");

btn.addEventListener("click", function() {
    exp.style.display = "block";
  });


