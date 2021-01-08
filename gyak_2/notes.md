# Szerver oldali javascript: Gyak 2

## alap express alakalmazás

Az előző gyakorlaton tanultak alapján inicailizáljuk a projektet:

```
npm init
```

NHozzunk létre egy index.js-t amibe az alábbi kódot másoljuk. Ez lesz az alap express alkalmazás. Látszik, hogy a 3000-es portra raktuk a szervert.

```javascript
var express = require('express');
var app = express();

app.use(express.static('static'));

var server = app.listen(3000, function () {
  console.log("On : 3000");
});
```

A statikus weboldalunkat egy static mappába tároljuk. Azért statikus weboldalunk lesz a mert az express alkalmazásba ezt határoztuk meg.


## statikus weboldalak

Tök alap .html fájlok. Csináltam egy index.html-t és egy 2.html-t.

## bootstrap 4

Másoljuk be a Bootstrap 4 weboldalán tatlálható css és js kódokat az index.html fájlba és nézzük meg hogyan változott.

### containerek

12 függőleges container van a Bootstrap 4 grid layoutjában. Ez segíti a rendezést.

### Templatek

A Bootstrap documentációjából nagyon sok előre legyártott templatet le lehet húzni. A gyakon az alábbiakat néztük.

- forms
- navbar
- buttons

## fontawseome

Erre a weboldalra regisztrálva, lehet használni csomó ingyenes ikont.

## code inspect

Az alábbi commanddal inspectelni lehet a programot runtime alatt.

```
npm --inspect szollo.js
```

Ha azt akarjuk, hogy egyből rakjon egy breakpointot az elejére, akkor az alábbi módon módosítsuk az utasitást.

```
npm --inspect-brk szollo.js
```

Ezt a debugolást egy chromium based böngészőben úgy tudjuk elvégezni, hogy search barba az alábbi commandot írjuk.

```
chrome://inspect
```

Itt kiválasztjuk az inspectelt .js fájlunkat, és mehet a debugolás! Line-by-line végig mehetünk a kódon. Megnézhetjük az adott scopeban elért változókat, a bennük tárolt adatokat, és sok minden mást.

## nodemon

Érdemes a nodemon-t is telepíteni, mert ha nodemonnal indítjuk el az alkalmazást, akkor minden source kódban történő változtatás után újraindítja a servert. Az alábbi utasítással globálisan installáljuk a nodemont. Tapasztalatom szerint kell a sudo, mert kell engedélye, hogy a /usr/lib/node_modules -ba tudjon írni.

```
sudo npm i -g nodemon
```

És futtatssuk nodemonnal a javascriptünket. Ha változtatunk a programunkon, akkor `ctrl+s`-el újratölti a localhostot.

```
nodemon index.js
```

