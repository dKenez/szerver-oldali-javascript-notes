# Szerver oldali javascript: Gyak 1

## node.js elkezdése

Az alábbi kódot indítsuk el a projekt könyvtárába. Ez oldja meg a cuccokat.

```
npm init
```

Nézzük meg a projekt beállítását

```
cat package.json
```

Futtassunk tesztet, `npm init`-nél bekellet volna írni a test cuccot

```
npm run test

Error: no test specified
```

## package install

Intalláljunk sima packageket

```
npm i colors --save
npm i express --save
```

Installáljunk packageket, amik csak fejlesztőknek szükséges

```
npm i mocha --save-dev
```

Házi leadásakor ne legyen benne a node_modules könyvtár, a package.json-ből lehet installálni mindent

```
npm i
```

## nézzük meg a package.json-t és package-lock.json-t

a package. json-ben megjelent egy dependencies és egy dev-dependencies rész

```
cat package.json
```

output

```
{
  "name": "gyak1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "colors": "^1.4.0",
    "i": "^0.3.6"
  },
  "devDependencies": {
    "mocha": "^8.1.3"
  }
}

```

illetve a package-lock.json tartalmazza az összes dependency dependency-jét

```
cat package-lock.json
```

# első programunk

Készítsünk egy index.js fájlt amibe a következő kódot írjuk:

```
var colors = require('colors');

console.log('hello'.green);
console.log('valami');
```

majd consoleból futtassuk

```
node index.js
```



