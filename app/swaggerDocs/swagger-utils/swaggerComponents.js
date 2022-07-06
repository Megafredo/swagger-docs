import { usersProperties, articlesProperties } from './swaggerExamples.js';

const components = {
    schemas: {
        StatusErrors: {
            type: 'object',
            properties: {
                code: {
                    type: 'integer',
                },
                message: {
                    type: 'string'
                }
            }
        },
        //~ 
        Users: {
            type: 'object',
            properties: usersProperties
        },
        Articles: {
            type: 'object',
            properties: articlesProperties
        }
    }
};

export { components };
