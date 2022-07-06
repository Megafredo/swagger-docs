# Swagger Documentation

___

Source :

[Utilisation de Swagger avec NodeJs REST API](https://www.section.io/engineering-education/documenting-node-js-rest-api-using-swagger/#documenting-api-components)

[Exemple editeur](https://editor.swagger.io/)

[Specification Media-types](https://swagger.io/docs/specification/media-types/)

[CSS Dark mode Swagger](https://github.com/Amoenus/SwaggerDark/)


Exemple de JS Docs :

```js

/**
 * GET /
 * @summary Home
 * @description Description de la route voir sa fonction
 * @tags Home
 * 
 * @example response - 200 - Intitulé 01
 * {"Success" : "mon resultat 01 est ici"}
 * @example response - 200 - Intitulé 02
 * {"Success" : "mon resultat 02 est ici"}
 * @return {string} 200 - Description Global
 * 
 * 
 * @example response - 500 - Intitulé 01
 * {"Error 500": "message 01"}
 * @example response - 500 - Intitulé 02
 * {"Error 500": "message 02"}
 * @return {string} 500 - Description Global
 * 
 */

/**
 * @typedef {*}Articles
 * @property {string} category
 * @property {string} slug
 * @property {string} title
 * @property {string} excerpt
 * @property {string} content
 * @property {integer} category_id
 */


//~ ROUTES ARTICLE
/**
 * GET /api/v1/posts
 * @summary Tous les articles
 * @description Récupère tous les articles
 * @tags Articles
 * @return {string} 200 - success response - application/json
 * @example response - 200 - success response - application/json
 * {
  "id": 1,
  "category": "Angular",
  "slug": "angular-une-fausse-bonne-idee",
  "title": "Angular, une fausse bonne idée ?",
  "excerpt": "Lorem <em>ipsum dolor</em> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolo",
  "content": "Angular, une fausse bonne idée ? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi",
  "category_id": 2
}
 * @return {string} 500 - error response 
 * @example response - 500 - error response
 * {
 *   "Error 500": "message"
 * }
 */
router.get('/api/v1/posts', fetchAllArticles);


// //~ ---------------------------------------- ALL USERS
// /**
//  * @swagger
//  * tags:
//  *   name: Test
//  *   description: Ceci est ma description pour mon tag "Test"
//  * 
//  */
// router.get('/users', (req, res) => [
//     {
//         id: 1,
//         name: 'User1'
//     },
//     {
//         id: 2,
//         title: 'User2'
//     }
// ]);

```

    //* responses les plus courantes :
    // '200': description: Requête réussi. / Success response
    // '400': description: Mauvaise requête. L'Id de l'user doit être un nombre entier et supérieur à 0. / Bad request. User ID must be an integer and larger than 0.
    // '401': description: Les informations d'autorisation sont manquantes ou invalides. / Authorization information is missing or invalid.
    // '404': description: Page non trouvée / Page not found.
    // '5XX': description: Erreur inattendue. / Unexpected error.