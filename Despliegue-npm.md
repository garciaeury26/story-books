# Desplegar a NPM

# Configuracion del package.json

### Configuramos el author
``` 
"author": {
    "name": "Eury Joel"
},
```

### cambiamos el la visibilidad del paquete para poder subirlo si esta en false no se subira
``` 
"private": true,

```
#### Definimos los tipos si estamos usando typeScript
``` 
"typings":"dist/index.d.ts",
```

### Agregamos tambien *main*, que servira para que las aplicaciones sepan el punto de entrada de donde se inporta los datos de nuestro paquete
``` 
"main": "dist/index.js",
```

### tambien podemos agregar un sitio Web de referencia
```
"homepage": "https://portafolio-blush-gamma.vercel.app/",
```

### congirumaos un repository de githud para referencia
```
"repository": {
    "type": "git",
    "url": "https://github.com/garciaeury26"
},
``` 

### definicion de la rama para githud actions pudes agregar la que quieras
```
"release": {
    "branches": [
      "main"
    ]
},
```

### los archivos que vamos a subir
```
"files": [
    "dist",
    "src"
  ],
```

### en nuestro archivo de tsCongif/compileOption agreguemos outDir => este propiedad no ayuda a definir la salida del producto o la carpeta principal.
```
"outDir": "dist",
```

### otras configuraciones
```
"declaration": true,
"noEmit": false,
"module": "CommonJS",
```

### tambien es muy importante configurar las dependencias que el usario necesita tener para instalar el paquete
```
"peerDependencies": {  
    "react": ">=16",
      "typescript": ">=4.0.0",
}
```

### ejecuto tsc para que compile la carpeta src
*Si tienes error con las importaciones vefica que cada interface de cada componente tenga el export*

### en index src exportamos los componentes que los usuarios pueden utilizar.
```
export { MyLabel } from "./components/MyLabel";
export { Page } from "./stories/Page";

```


### no vamos utilizar el build de storyBooks => crearemos nuestro propio script que elimine la carpeta dist y la vuelva a crear para guardar los cabios mas rapido.
#### para ejecutar estos conmandos nececitas estos paquetes:
* npm i rimraf => borrar archivos
* npm i copyfiles => copiar y movaer archivos
```
"scripts": {
    "start": "yarn storybook",
    "build": "yarn clean && tsc && yarn copy-files",
    "clean": "rimraf dist/",
    "copy-files": "copyfiles -u 1 src/**/*.css dist/",
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook",
    "chromatic": "npx chromatic --project-token=0e6ab58dbe16"
  },
```
* la propiedad clean es un script que borra la carpeta dist cuando lo ejecutamos
*Y con el script del build llamo al script clean para que se ejecuto tambien de esa forma. Luego ejecuto el comando tsc para que vuelva y lo crea.*