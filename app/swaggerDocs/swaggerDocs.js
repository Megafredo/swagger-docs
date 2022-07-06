//~MISE EN PLACE DE SWAGGER POUR LA DOC
// import { options } from './app/utils/swaggerDocs.js';
import swagger from 'swagger-jsdoc';
const swaggerJSDoc = swagger;

import { serve, setup } from 'swagger-ui-express';
import { swaggerDarkCss } from './swagger-utils/swaggerDark.js';

import { users, userId } from './user.js';
import { articles, articleId } from './article.js';


const options = {

    definition: {
        openapi: '3.0.0',
       

        info: {
            version: '1.0.0',
            title: 'SwaggerDocs Expérimentations',
            description: `Ici, c'est la super description pour nos expérimentations swaggerDocs.`,
            license: {
                name: 'MIT'
            },
            
        },

        externalDocs: {
            description : 'Yumicode & Megafredo',
            url: 'http://WorkHard_DreamBig_NeverGiveUp/',
        },
      
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
       
        paths: {
            //~ ------------- USERS
            '/users': users,
            '/users/{id}': userId,
            
            //~ ------------- ARTICLES
            '/articles': articles,
            '/articles/{id}': articleId
        
        },
    },

    apis: ['./app/routers/*.js'] // apis: ['./*/*/*.js']

};

const specs = swaggerJSDoc(options);

const cssOptions = {
    customCss :swaggerDarkCss,
    customSiteTitle: "Yumedo"
}

export { specs, serve, setup, cssOptions };
