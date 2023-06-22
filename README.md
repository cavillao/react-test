# Guía de Proyecto e Instalación: 

## Instalación

Para correr el proyecto, clona el proyecto directamente en la rama `master`, abre la consola y encuentra la carpeta clonada.\
\
Después de esto solo debes correr el comando `npm start`.

## Explicación del proyecto

Este proyecto despliega una lista de posts consumidos desde una API de testeo, la idea era mantener una lista de todos los posts\
por ende, es un scroll de todos los 100 posts que inicialmente se obtienen, la single page application permite así añadir más posts.

Estos post se pueden añadir clickeando el botón `Publica Aquí`, este desplegará una sección que te permite añadir el título y el cuerpo\
del post, al guardar, este nuevo post se verá agregado en la página inmediatamente.

Adicional a esto, puedes editar y borrrar posts dando click a los íconos correspondientes, puedes editar o borrar cualquier post\
incluyendo los iniciales como los finales.

## Código del proyecto.

El proyecto fue hecho en ReactJS, usando la librería de Axios para consumir la API, Material Icons de Material UI para varios de los botones usados en la app\
y distintos hooks nativos de Reacts.

Los componentes añadidos están en la carpeta `components`, son 2 componentes, el componente `Editor` que se despliega al editar los posts y el componente\
`Posts` que es el componente principal que renderiza los posts y una sección nueva para añadir los posts, adicional el título y el botón para desplegar la sección
de los posts nuevos.

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
