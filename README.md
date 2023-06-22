# Guía de Proyecto e Instalación: 

## Instalación

Para correr el proyecto, clona el proyecto directamente en la rama `master`, abre la consola y encuentra la carpeta clonada.\
\
Después de esto solo debes correr el comando `npm start`.

## Explicación del proyecto

Este proyecto despliega una lista de posts consumidos desde una API de testeo, la idea era mantener una lista de todos los posts por ende, es un scroll de todos los 100 posts que inicialmente se obtienen, la single page application permite así añadir más posts.

Estos post se pueden añadir clickeando el botón `Publica Aquí`, este desplegará una sección que te permite añadir el título y el cuerpo del post, al guardar, este nuevo post se verá agregado en la página inmediatamente.

Adicional a esto, puedes editar y borrrar posts dando click a los íconos correspondientes, puedes editar o borrar cualquier post incluyendo los iniciales como los finales.

## Código del proyecto.

El proyecto fue hecho en ReactJS, usando la librería de Axios para consumir la API, Material Icons de Material UI para varios de los botones usados en la app y distintos hooks nativos de Reacts.

Los componentes añadidos están en la carpeta `components`, son 2 componentes, el componente `Editor` que se despliega al editar los posts y el componente `Posts` que es el componente principal que renderiza los posts y una sección nueva para añadir los posts, adicional el título y el botón para desplegar la sección
de los posts nuevos.
