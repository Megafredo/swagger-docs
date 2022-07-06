//~ ------------------------------ IMPORTATIONS EXAMPLES / STATUS CODES
import { usersProperties, userExample } from './swagger-utils/swaggerExamples.js';
import { error400, error404 } from './swagger-utils/swaggerStatus.js';


const users = {
    //~ --------------------------------------------- FETCH ALL USERS
    get: {
        tags: ['Users'],
        summary: 'Récupération des utilisateurs',
        responses: {
            200: {
                description: 'Requête réussie',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: usersProperties,
                            example: userExample
                        }
                    }
                }
            },
            404: error404
        }
    },

    //~ --------------------------------------------- CREATE USER
    post: {
        tags: ['Users'],
        summary: `Création d'un utilisateur`,
        responses: {
            201: {
                description: 'Requête réussie et utilisateur créé',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: usersProperties,
                            example: userExample
                        }
                    }
                }
            },
            400: error400
        }
    }
};

const userId = {
    //~ --------------------------------------------- FETCH ONE USER
    get: {
        tags: ['Users'],
        summary: `Récupérer l'utilisateur par son Id`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id pour récupérer un utilisateur'
            }
        ],
        responses: {
            200: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: usersProperties,
                            example: userExample
                        }
                    }
                },
                description: `Requête réussie`
            },

            400: error400,
            404: error404
        }
    },

    //~ ------------------------------------------------------------------- UPDATE USER
    patch: {
        tags: ['Users'],
        summary: `Mise à jour des informations d'un utilisateur`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id pour mettre à jour un utilisateur'
            }
        ],
        responses: {
            200: {
                description: 'Requête réussie',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: { message: { type: 'string' } },
                            example: {
                                message: 'La donnée à bien été modifiée'
                            }
                        }
                    }
                }
            },
            400: error400,
            404: error404
        }
    },

    //~ --------------------------------------------- DELETE USER
    delete: {
        tags: ['Users'],
        summary: `Suppression d'un utilisateur`,
        parameters: [
            {
                name: 'id',
                in: 'params',
                required: true,
                schema: {
                    type: 'integer',
                    example: 1
                },
                description: 'Id pour supprimer un utilisateur'
            }
        ],
        responses: {
            200: {
                description: 'Requête réussie',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: { message: { type: 'string' } },
                            example: {
                                message: 'La donnée à bien été supprimée'
                            }
                        }
                    }
                }
            },
            400: error400,
            404: error404
        }
    }
};

export { users, userId };
