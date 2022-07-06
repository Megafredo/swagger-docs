# Mise en place des options

## swaggerDocs.js - les options

Grace au module npm swagger-jsdoc nous pouvons configurer facilement notre page /api-docs (lien déterminé dans notre index)


### Options de base

```js
// Configuration de base
const options = {

    definition: {

        // Les informations principales
        openapi: '3.0.0',
        info: {
            version: '1.0.0',
            title: 'SwaggerDocs Expérimentations',
            description: `Ici, c'est la super description pour nos expérimentations swaggerDocs.`,
            license: {
                name: 'MIT'
            },
        },

        // [...]
    },
    apis: ['./app/routers/*.js']
    // Equivalent à 
    // apis: ['./*/*/*.js']

};
```

### Les importations

```js
//~ MISE EN PLACE DE SWAGGER POUR LA DOC
import swagger from 'swagger-jsdoc';
const swaggerJSDoc = swagger;
import { serve, setup } from 'swagger-ui-express';

// A voir dans le chapitre suivant
import { swaggerDarkCss } from './swagger-utils/swaggerDark.js';
import { users, userId } from './user.js';
import { articles, articleId } from './article.js';
import { components } from './swagger-utils/swaggerComponents.js';
```

Nous allons placer en plus dans les options :

    - Les liens extérieurs
    - Tous les serveurs
    - Tous les chemins ( GET / POST / PATCH / DELETE )
    - Tous les components (schemas)

### Liens extérieurs

```js
externalDocs: {
    description : 'Yumicode & Megafredo',
    url: 'http://WorkHard_DreamBig_NeverGiveUp/',
},
```

### Tout les serveurs

```js
 servers: [
            {
                url: 'http://localhost:4100/api/v1',
                description: 'API v1'
            },
            {
                url: 'http://localhost:4100/api/v2',
                description: 'API v2'
            },
            {
                url: 'http://heroku/api/v1',
                description: 'API v1'
            }
        ],
```

### Tout les chemins ( GET / POST / PATCH / DELETE )

```js
// Pour comprendre users, userId, articles, articleId : Voir le chapitre suivant
paths: {
            //~ ------------- USERS
            '/users': users,
            '/users/{id}': userId,
            
            //~ ------------- ARTICLES
            '/articles': articles,
            '/articles/{id}': articleId
        },
```

### Tout les components (schemas)

```js
// Voir le chapitre suivant pour les components (schemas)
components,
```

---
## Rendu final du fichier swaggerDocs.js

```js
//~ MISE EN PLACE DE SWAGGER POUR LA DOC
import swagger from 'swagger-jsdoc';
const swaggerJSDoc = swagger;
import { serve, setup } from 'swagger-ui-express';

import { swaggerDarkCss } from './swagger-utils/swaggerDark.js';
import { users, userId } from './user.js';
import { articles, articleId } from './article.js';
import { components } from './swagger-utils/swaggerComponents.js';


const options = {

    definition: {

        // Les informations principales
        openapi: '3.0.0',
        info: {
            version: '1.0.0',
            title: 'SwaggerDocs Expérimentations',
            description: `Ici, c'est la super description pour nos expérimentations swaggerDocs.`,
            license: {
                name: 'MIT'
            },
        },

        // Les liens extérieurs
        externalDocs: {
            description : 'Yumicode & Megafredo',
            url: 'http://WorkHard_DreamBig_NeverGiveUp/',
        },
      
        // Tous les serveurs
        servers: [
            {
                url: 'http://localhost:4100/api/v1',
                description: 'API v1'
            },
            {
                url: 'http://localhost:4100/api/v2',
                description: 'API v2'
            },
            {
                url: 'http://heroku/api/v1',
                description: 'API v1'
            }
        ],
       
        // Tous les chemins ( GET / POST / PATCH / DELETE )
        paths: {

            //~ ------------- USERS
            '/users': users,
            '/users/{id}': userId,
            
            //~ ------------- ARTICLES
            '/articles': articles,
            '/articles/{id}': articleId
        
        },

        // Tous les schemas
        components,

        // Element correspondant à la sécurité
        // securitySchemes: {
        //     api_key: {
        //         type: 'apiKey',
        //         name: 'api_key',
        //         in: 'header'
        //     },
        // }
    },

    apis: ['./app/routers/*.js']
    // Equivalent à 
    // apis: ['./*/*/*.js']
};

const specs = swaggerJSDoc(options);

const cssOptions = {
    // Css utilisé
    customCss :swaggerDarkCss,
    // Titre de l'onglet web
    customSiteTitle: "Yumedo"
}

export { specs, serve, setup, cssOptions };
```


[Chapitre précédent](02_Initialisation.md) / [Retour à l'accueil](../README.md) / [Chapitre suivant](04_decomposition.md)