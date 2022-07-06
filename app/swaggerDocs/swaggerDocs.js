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
    customCss :swaggerDarkCss,
    customSiteTitle: "Yumedo"
}

export { specs, serve, setup, cssOptions };
