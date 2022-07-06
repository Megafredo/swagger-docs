const allArticles = {

    //~ ------------------------------------------------------------------- FETCH ALL ARTICLES
    get: {
        description: 'Récupération de tout les articles',
        responses: {
            200: {
                description: 'A list of articles.'
            },
            400: {
                description: 'An error occured !'
            }
        }
    },

    //~ ------------------------------------------------------------------- FETCH ONE ARTICLE
    get: {
        description: `Récupération d'un article via l'id`,
        responses: {
            200: {
                description: 'A list of articles.'
            },
            400: {
                description: 'An error occured !'
            }
        }
    },

    //~ ------------------------------------------------------------------- CREATE ARTICLE
    post: {
        description: `Création d'un article`,
        responses: {
            200: {
                description: 'A list of articles.'
            },
            400: {
                description: 'An error occured !'
            }
        }
    },

    //~ ------------------------------------------------------------------- UPDATE ARTICLE
    patch: {
        description: `Mise à jour d'un article via l'id`,
        responses: {
            200: {
                description: 'A list of articles.'
            },
            400: {
                description: 'An error occured !'
            }
        }
    },

    //~ ------------------------------------------------------------------- DELETE ARTICLE
    delete: {
        description: `Supprimer un article via l'id`,
        responses: {
            200: {
                description: 'A list of articles.'
            },
            400: {
                description: 'An error occured !'
            }
        }
    },
};

export { allArticles };