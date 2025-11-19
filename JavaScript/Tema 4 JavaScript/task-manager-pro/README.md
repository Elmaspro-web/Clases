Este proyecto consta de la realización de un pequeño gestor de tareas, desde su creación hasta su borrado. 
Estas tareas están compuestas de: un identificador, un título, una descripcion, un estado (Completado o No Completado), y la fecha de cuando se creo.

Todos los archivos deberan estar bien estructurados y con nombres identificativos.

Los patrones a utilizar seran:

1. Creacional: Singleton
    He creado la clase GestorTareas en la que he copiado el inicio de Rafa,
    además he añadido las funciones de: 

   1.1. agregarTarea (Se le llama para crear la tarea y añadirla al array)

      agregarTarea(titulo, descripcion, prioridad, estado = "No completado") 
      { 
        const tarea = new Tarea(titulo, descripcion, prioridad, estado);
        this.tareas.push(tarea);
        return tarea;
      }

   1.2. eliminarTarea (Solo se usa en el botón eliminar)

      eliminarTarea(indice) 
      {
        this.tareas.splice(indice, 1);
      }
   
   1.3. getTareas (Se usa para casi todo) -> para añadir al localstorage y para mostrar tareas

      getTareas() 
      {
        return this.tareas;
      }

2. Estructural: Facade
3. c

Para ejecutar este proyecto: 

Deberas abrir el index.html, rellenar los campos y darle a "Crear", una vez creada la tarea verás 
que se añade abajo en filas de hasta 3 tareas, cada tarea con sus 2 botones, Completar y Eliminar, 
el botón eliminar elimina la tarea CUIDADO PORQUE DESAPARECE, y el de completar simplemente hara que el fondo cambie de color a verde.

Además, hay 2 botones más: El de estado y el de prioridad, estos botones sirven para ordenar las tareas según ese orden.

Si deseas eliminar todas las tareas: 

1. Pulsa F12
2. Ve al apartado de aplicaciones
3. Cliquea en "Almacenamiento local"
4. Clic derecho encima del http:/localhost:puerto
5. Le das a borrar
