window.onload= () =>{
   
    //ACA estamos usando la funcion para crear una tarea
    crearTareas()   
    agregarTarea()
}

function  agregarTarea() {
    const nuevaTarea ={nombre: 'tarea',fecha:"18/06/89"}
    const nombreNuevaTarea= prompt ('ingrese el mombre de la tarea')
    nuevaTarea.nombre=nombreNuevaTarea
    renderizarTarea(nuevaTarea)
}

//este atrapa la imfo y la envia de bonita forma
function renderizarTarea(tarea) {

    // este es el template que sirve para agregar una tarea

    const template= `
    <li class="tarea">
    <div class="not-done"></div>
    <div class="descripcion">
    <p class="nombre">${tarea.nombre}</p>
    <p class="timestamp">Creado el : ${tarea.fecha}</p>
    </div>
    </li>
    `
 //aca estamos seleccionando el div donde estan las tareas seleccionadas
 const contenedorTareas= document.querySelector('ul.tareas-pendientes')

 //aca estamos insertando el template con la nueva tarea
 contenedorTareas.innerHTML +=template
    
}

function crearTareas() {

  //aca estamos haciendo una funcion de insercion por fada tarea
  tareas.forEach(tarea=>{
    renderizarTarea(tarea)

})
    
}

//este es un arreglo con diferentes tareas harcodeadas
const tareas= [
    {nombre:"tarea1", fecha:"18/06/89", estado: false},
    {nombre:"tarea1", fecha:"18/06/90", estado: false},
    {nombre:"tarea1", fecha:"18/06/89", estado: false},
]


