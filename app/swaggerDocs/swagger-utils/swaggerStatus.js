const code200 = {
   
}

const error400 = {
    description: `Mauvaise requête. L'Id doit être un nombre entier et supérieur à 0`,
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: { Error: { type: 'string' } },
                example: { 'Error 400': 'Mauvaise requête' }
            }
        }
    }
}

const error404 = {
    description: 'Donnée non trouvée',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: { Error: { type: 'string' } },
                example: { 'Error 404': 'Donnée non trouvée' }
            }
        }
    }
}


export { error400, error404, code200 };