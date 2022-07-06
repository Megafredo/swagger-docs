# Initialisation de Swagger

## NPM

Dans notre initialisation nous allons importer 2 modules npm :

[NPM Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) /
[NPM Swagger JSDoc](https://www.npmjs.com/package/swagger-jsdoc)

```sh
npm install swagger-ui-express
npm install swagger-jsdoc

# Et pour ceux et celle qui aiment vivre dangereusement
# npm i swagger-ui-express swagger-jsdoc
```

## SwaggerDocs.js

Une fois les modules installés nous allons crée un fichier `swaggerDocs.js` dans notre dossier `swaggerDocs`.
C'est dans se fichier que la magie opère !

Nos importations se font commme ceci :

```js
// En CommonJS:
// const swagerJSDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');

// En ES6 Module
// Sans destructuring
// import pkg from 'swagger-ui-express';
// const swaggerUi = pkg;

// En ES6 Module
import swagger from 'swagger-jsdoc';
const swaggerJSDoc = swagger;

// Avec destructuring
import { serve, setup } from 'swagger-ui-express';
```

## Index.js (root)

Ensuite, toujours dans le même fichier, nous allons exporter le tout vers notre `index.js` de notre API.

```js
// options et cssOptions seront vues dans le prochain chapitre !
const specs = swaggerJSDoc(options);

// En ES6 Module
export { specs, serve, setup, cssOptions };

// En CommonJS:
// module.exports = { specs, serve, setup, cssOptions };
```

Et pour finir dans notre fichier `index.js` (situé dans le root de notre API)

```js
//~ IMPORTATION SWAGGER DOCS
// En CommonJS:
// const {specs, serve, setup, cssOptions} = require('./app/swaggerDocs/swaggerDocs.js');

// En ES6 Module
import { specs, serve, setup, cssOptions} from './app/swaggerDocs/swaggerDocs.js';

// Sans destructuring 
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

// Avec destructuring
app.use('/api-docs', serve, setup(specs, cssOptions));
```

---
## Rendu final de notre index.js :

```js
//~ IMPORTATION DOTENV
import 'dotenv/config';

//~ IMPORTATION MODULES
import express from 'express';
const app = express();
import { router } from './app/routers/index.js';

//~ IMPORTATION SWAGGER DOCS
import { specs, serve, setup, cssOptions} from './app/swaggerDocs/swaggerDocs.js';
app.use('/api-docs', serve, setup(specs, cssOptions));

app.use(router);

//~ LANCEMENT DU SERVER
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
    console.log(` \x1b[1;33m\u26a1http://localhost:${PORT} \u26a1\x1b[0m`);
});
```

[Chapitre précédent](01_Architecture.md) / [Retour à l'accueil](../README.md) / [Chapitre suivant](03_options.md) 
