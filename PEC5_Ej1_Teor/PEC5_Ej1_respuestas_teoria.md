
# Ejercicio 1

### Diferencias entre formularios dirigidos por template y formularios reactivos

Las principales diferencias entre formularios dirigidos por template y formularios reactivos radican en su implementación y manejo. Mientras que los formularios dirigidos por template se configuran y validan principalmente en el HTML, los formularios reactivos gestionan estas tareas en TypeScript. En los formularios dirigidos por template, los estados del formulario son manejados directamente por la plantilla HTML, mientras que en los reactivos son gestionados en TypeScript. En cuanto al mantenimiento, los formularios dirigidos por template se prefieren para formularios simples y pequeños, mientras que los formularios reactivos se utilizan para formularios más grandes y complejos.

### Directivas ngModel y ngModelChange

La directiva ngModel se utiliza para sincronizar automáticamente el valor de un campo de formulario con el modelo de datos en el componente. Se aplica a elementos de entrada como input o textarea. Por otro lado, ngModelChange es un evento que se dispara cuando cambia el valor del modelo. Se utiliza para ejecutar una función específica en el componente cada vez que el valor del modelo se modifica, lo que permite gestionar cambios en el componente.

### Estados en formularios dirigidos por templates

Los estados en formularios dirigidos por templates indican el estado actual del formulario en términos de validación e interacción con el usuario. Algunos estados comunes incluyen Pristine (el usuario no ha interactuado con el campo), Dirty (el usuario ha modificado el valor del campo), Touched (el usuario ha interactuado con el campo), Untouched (el usuario no ha interactuado con el campo), Valid (el valor cumple con las validaciones) e Invalid (el valor no cumple con las validaciones). Estos estados se utilizan para mejorar la experiencia del usuario y la accesibilidad del formulario.

### Ventajas de los FormGroup en la composición de formularios

FormGroup proporciona varias ventajas en la composición de formularios:
- Facilita realizar acciones en conjunto, como restablecer todos los campos del formulario con un solo método.
- Mejora la interacción con el usuario al permitir habilitar o deshabilitar campos dentro del formulario.
- Permite acceder fácilmente a los valores del formulario, simplificando la manipulación y obtención de datos.
- Facilita la agrupación de formularios relacionados, lo que mejora la organización y el manejo de formularios complejos con campos relacionados entre sí.
