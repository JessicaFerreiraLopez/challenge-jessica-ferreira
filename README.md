# Challenge Técnico - Jessica Ferreira

## Librerías y frameworks utilizados

- **Tailwind CSS**: Incluido en el proyecto por requerimiento.
- **Axios**: Cliente HTTP que decidí utilizar por su sencilla implementación y las funcionalidades que ofrece, considerando un buen costo-beneficio.

## Instrucciones para ejecutar el proyecto

Para ejecutar el proyecto, sigue estos sencillos pasos:

1. Clona el repositorio.
2. Ejecuta el comando `npm install` para instalar las librerías utilizadas localmente.
3. Ejecuta el comando `npm start` para levantar el proyecto.

## Decisiones de desarrollo

- Manejo de estados: Utilicé el hook `useState` en cada componente en lugar de opciones más globales, como contextos o Redux, ya que los estados requeridos eran simples y no necesitaban ser globales.

- TypeScript: Incluí TypeScript para un mejor manejo de errores y para estandarizar el código.

- Consultas a la API: Utilicé Axios junto con un hook personalizado para manejar errores y estados de las peticiones. Esta estrategia resultó simple pero efectiva, aunque no estaba incluida en el diseño original, agregué un spinner para gestionar los tiempos de respuesta.

- Diseño de la barra lateral: Evalué diferentes opciones para implementar la barra lateral. Decidí utilizar una colección centralizada que incluye todas las opciones y sus respectivas consultas a la API. Esto permite agregar fácilmente nuevas opciones estáticamente y, en caso de requerir grupos dinámicos, reutilizar la lógica adaptándola al modelo de datos.

## Mejoras sugeridas

Como mejoras principales, implementaria una paginación, especialmente para los productos por categoría, ya que el número de productos puede aumentar considerablemente y afectar el rendimiento de la aplicación.

Además, sería beneficioso aplicar lazy loading a las imágenes para una carga más eficiente. Actualmente, he utilizado la propiedad `loading="lazy"`, pero su soporte puede variar según el navegador.

Si bien le hice una sencilla optimizacion para dispositivos moviles, creo que podria mejorar.

Cualquier Feedback que tengas me ayuda a mejorar y estaré encantada de recibirlo. ¡Gracias por tu tiempo y por la oportunidad de participar en este desafío!
