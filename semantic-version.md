# Configuracion de semantic-versions automatico

* intalamos este paquete 
```
npm i --dev semantic-release
yarn add -D semantic-release
```

* agregamos estos plugins en nuestro package.json
```
"plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
    "@semantic-release/npm",
    "@semantic-release/git"
],
```

## Como aplicar el semantic-version
*Para utilizar la semantic-version los commitst son esenciales*
* git -m "fix: messsage" => Lanzamiento de Patch Fix
* git -m "feat: messsage" => Versión de características secundarias
* git -m "perf: messsage" => Lanzamiento de ruptura importante

*Podemos aser el push pero no veremons el realese, necesitamos configurar githud-actions*

## Creat token de acceso en githud
* ve a githud y entra en configuaciones / developer tools

* Personal tokens => generar token

* En la parte de select scopes elige repo

* Clickeamos el boton de generar token

* lo guardamos bien ya que no podremos generar otro

* Vamos a npm y en nuestro perfil entramos a Access Tokens

* generamos el token de npm y que se (publico => alguien con este token puede generar paquetes como si fuerean de ellos)

*Con esos dos token podremos utilizar githud actions para el versionamiento automatico*

## volvamos a githud

* Entramos a la parte de configuracion de nuestro repository/configuracion/secury/secrets/actions

* new secret, en la parte de value a gregamos nuestro token de githud

* y volvamos y creamos otra con el valor del token de npm

*Recuerda que el nombre no deve tener (_ y minusculas)*

* vamos a githud actions y creamos un workflow y cramos uno costumizado luego le damos a commit

* git pusll para obtener los ultimos cambios

* entramos a la carpata yml => que esta en la carpeta de githud de nuestro proyecto

*Agregamos esta configuracion en el archivo yml este archivo nos ayura aser comandos y la configuracion de nuestro proyecto en  githud actions*
```
   # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v3

      # pasos realizados por mi 
      - name: Setup Node.js
        uses: actions/setup-node@v1
        with: 
          node-version: 14.17

      # intalacion de dependencies
      - name: Install Dependencies
        run: yarn install

      - name: Build App
        run: yarn build

      - name: Semantic Realease
        # variables => nombre:${{secrets_Nombre que le asisgnaste en githud}}
        env: 
          GITHUB_TOKEN: ${{secrets_GH_TOKEN}}
          NPM_TOKEN: ${{secrets_NPM_TOKEN}}
        run: npx semantic-realease

```

*Ejecutamos los siguientes comabdis*
```
git add .
git commit -m "feat:Initial commit"
git push
```
*Recuerda que el commit puedes agregar la opcion de que tipo de actualiacion es: feat:*