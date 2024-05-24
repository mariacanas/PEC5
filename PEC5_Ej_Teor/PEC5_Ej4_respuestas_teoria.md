


a) ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?

**FormControl** es una parte de un formulario que representa un campo, como por ejemplo una caja de texto o casilla de verificación, la cual va a guardar el valor del campo junto con su estado.

**FormGroup** es el conjunto de varios FormControl. Al tener agrupados los controles, nos va a facilitar el proceso de validación y seguimiento de varios campos a la vez.

**FormBuilder** nos va a ayudar a crear los FormControl y FormGroup de una forma más fácil y rápida, ya que nos va a permitir construir nuestro formulario de una manera más organizada y el código a implementar será menor.

b) Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.

Los validadores más comunes se encuentran en la siguiente tabla:

| Validador     | Descripción                                                                                     |
|---------------|-------------------------------------------------------------------------------------------------|
| required      | Verifica que el usuario ha rellenado el campo antes de enviar el formulario.                    |
| minLength     | Verifica que el texto que se ha introducido tiene una longitud mínima.                          |
| maxLength     | Verifica que el texto que se ha introducido no supera una longitud máxima.                      |
| pattern       | Verifica que el valor del control coincida con un patrón regex especificado.                    |
| email         | Verifica que el valor introducido sea una dirección de correo electrónico.                      |
| min           | Verifica que el valor sea un número mayor o igual que un valor mínimo especificado.             |
| max           | Verifica que el valor sea un número menor o igual que un valor máximo especificado.             |
| requiredTrue  | Verifica que el valor del control sea `true`.                                                   |
| nullValidator | No realiza ninguna validación y se utiliza para permitir que el valor sea nulo.                 |

c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?

Los estados en los formularios reactivos son los diferentes estados que pueden tener los controles de un formulario. Estos estados pueden cambiar según la interacción del usuario o las reglas de validación aplicadas.

Los estados más comunes son:

- **Pristine**: Indica que el campo no ha sido modificado por el usuario.
- **Dirty**: Indica que el campo ha sido modificado por el usuario.
- **Touched**: Indica que el campo ha sido interactuado (focado o desenfocado) por el usuario.
- **Untouched**: Indica que el campo no ha sido interactuado por el usuario.
- **Invalid**: Indica que el campo no cumple con las reglas de validación.
- **Valid**: Indica que el campo cumple con todas las reglas de validación.
- **Disabled**: Indica que el control está deshabilitado y el usuario no puede editarlo.
- **Enabled**: Indica que el control está habilitado y el usuario puede editarlo.

Estos estados proporcionan información visual sobre el estado de los controles del formulario, como si han sido modificados o si contienen datos válidos. Gracias a esta información, se pueden mostrar mensajes de error, activar o desactivar botones según los estados, o cambiar el aspecto de los controles del formulario para que sea más fácil de entender por el usuario.
