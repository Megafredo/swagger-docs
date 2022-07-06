//~ ------------------------------ EXAMPLES
import { articleExample, articlesProperties } from './swagger-utils/swaggerExamples.js';

import { error400, error404 } from './swagger-utils/swaggerStatus.js';

const articles = {
    //~ --------------------------------------------- FETCH ALL ARTICLES
    get: {
        // /articles/api/v1
        tags: ['Articles'],
        summary: 'Récupération de tout les articles',
        responses: {
            200: {
                description: 'Requête réussie',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: articlesProperties,
                            example: articleExample
                        }
                    }
                }
            },
            404: error404
        }
    },

    //~ --------------------------------------------- CREATE ARTICLE
    post: {
        tags: ['Articles'],
        summary: `Création d'un article`,
        responses: {
            201: {
                description: 'Requête réussie et article créé',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: articlesProperties,
                            example: articleExample
                        }
                    }
                }
            },
            400: error400
        }
    }
};

const articleId = {
    //~ --------------------------------------------- FETCH ONE ARTICLE
    get: {
        tags: ['Articles'],
        summary: `Récupérer l'article par son Id`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id pour récupérer un article'
            }
        ],
        responses: {
            200: {
                description: 'Requête réussie',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: articlesProperties,
                            example: articleExample
                        }
                    }
                }
            },
            400: error400,
            404: error404
        }
    },

    //~ --------------------------------------------- UPDATE ARTICLE
    patch: {
        tags: ['Articles'],
        summary: `Mise à jour d'un article par son Id`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id pour mettre à jour un article'
            }
        ],
        responses: {
            200: { description: 'Requête réussie' },
            400: error400,
            404: error404
        }
    },

    //~ --------------------------------------------- DELETE ARTICLE
    delete: {
        tags: ['Articles'],
        summary: `Supprimer d'un article`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id pour supprimer un article'
            }
        ],
        responses: {
            200: { description: 'Requête réussie' },
            400: error400,
            404: error404
        }
    }
};

export { articles, articleId };
