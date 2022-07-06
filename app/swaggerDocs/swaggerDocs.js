// //~MISE EN PLACE DE SWAGGER POUR LA DOC
// import { options } from './app/utils/swaggerDocs.js';
import swagger from 'swagger-jsdoc';
const swaggerJSDoc = swagger;

import { serve, setup } from 'swagger-ui-express';

import { allUsers } from './user.js';
import { allArticles } from './article.js';

import { swaggerDarkCss } from './swagger-ui/swaggerDark.js';

const options = {

    definition: {

        openapi: '3.0.0',

        info: {
            version: '1.0.0',
            title: 'API Oblog',
            description: `ICI LA DESCRIPTION`,
            license: {
                name: 'MIT'
            }
        },

        servers: [
            {
                url: 'https://localhost:4100/api/v1',
                description: 'API v1'
            },
            {
                url: 'https://localhost:4100/api/v2',
                description: 'API v2'
            },
            {
                url: 'https://heroku/api/v1',
                description: 'API v1'
            }
        ],
        
        paths: {
            
            //~ ------------- USERS
            '/users/api/v1': allUsers,
            
            //~ ------------- ARTICLES
            '/articles/api/v1': allArticles
        
        },

    },

    apis: ['./app/routers/*.js'] // apis: ['./*/*/*.js']

};

const specs = swaggerJSDoc(options);



const cssOptions = {
    customCss :swaggerDarkCss,
    customSiteTitle: "Yumedo"
}

// const cssOptions = {
//     customCss : `
//     .topbar-wrapper img {content:url(https://img.icons8.com/doodle/2x/-freelancefirm.png); width:50px; height:auto;}
//     .swagger-ui { background-color: #000000;}`,
//     customSiteTitle: "Yumedo"
// }



export { specs, serve, setup, cssOptions };
