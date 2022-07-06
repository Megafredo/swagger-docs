# Création de l'architecture

Pour l'architecture nous sommes partis sur une base d'une API RESTful avec une simulation des opérations de CRUD (Create Read Update Delete) classiques mais non opérationnelles.

## Point d'entrée

Nous allons avoir le point d'entrée principal à la racine de notre dossier.

C'est par celui-ci que nous pourrons lancer le serveur et faire passer toutes les fonctionnalités de notre API.

Nous ferons les intégrations de 2 éléments : les utilisateurs et les articles.

## Routes

Nous définissons les routes qui permettront de récupérer les données dans un seul et même fichier pour la démo :

```js
//~ --------------------------------------------- IMPORT ROUTER
import { Router } from 'express';
const router = Router();

//~ --------------------------------------------- IMPORT METHODS
import { fetchAllArticles, fetchOneArticle, createArticle, updateArticle, deleteArticle} from '../controllers/article.js';
import { fetchAllUsers, fetchOneUser, createUser, updateUser, deleteUser } from '../controllers/user.js';


//~ --------------------------------------------- ROUTER INDEX
router.get('/', (req, res) => {
    res.json('Welcome to home !');
});


//~ --------------------------------------------- ROUTER ARTICLES
router.get('/api/v1/articles', fetchAllArticles);
router.get('/api/v1/articles/:id', fetchOneArticle);

router.post('/api/v1/articles', createArticle);
router.patch('/api/v1/articles/:id', updateArticle);
router.delete('/api/v1/articles/:id', deleteArticle);


//~ --------------------------------------------- ROUTER USER
router.get('/api/v1/users', fetchAllUsers);
router.get('/api/v1/users/:id', fetchOneUser);

router.post('/api/v1/users', createUser);
router.patch('/api/v1/users/:id', updateUser);
router.delete('/api/v1/users/:id', deleteUser);


export {router};
```

## Controllers

Dans notre dossier controller se trouveront toutes nos fonctionnalités.
Le rendu ici est donc fictif et ne renvoie pas de vraies données mais seront tout de même appliquées pour l'affichage de notre documentation.

Concernant les utilisateurs :

```js
function fetchAllUsers(req, res) {
    res.json('ALL USERS');
}

function fetchOneUser(req, res) {
    // POUR LES TESTS
    res.json({
        id: 1,
        firstname: 'Hélène',
        lastname: 'NGUYEN',
        email: 'yumicode@admin.com',
        password: '$2y$10$UeZpABYPkh/Y/ZrcVxAL2OYn0BZ8nbIcUc6G/6GjDZQFE6nnBYgpe'
    });
}
function createUser(req, res) {
    res.json('USER CREATED');
}
function updateUser(req, res) {
    res.json('USER UPDATED');
}
function deleteUser(req, res) {
    res.json('USER DELETED');
}

// En CommonJS
// module.exports = { fetchAllUsers, fetchOneUser, createUser, updateUser, deleteUser}

// En ES6 Module
export { fetchAllUsers, fetchOneUser, createUser, updateUser, deleteUser };
```

Pour les articles : 

```js
function fetchAllArticles(req, res) {
    res.json({
        id: 1,
        title: 'Titre1',
        description: 'Super Description',
        tags: 'Informatique',
        created_at: '06/07/2022',
        updated_at: '',
    });
}

function fetchOneArticle(req, res) { 
    res.json('GET ONE ARTICLE')
}
function createArticle(req, res) { 
    res.json('ARTICLE CREATED')
}
function updateArticle(req, res) { 
    res.json('ARTICLE UPDATED')
}
function deleteArticle(req, res) { 
    res.json('ARTICLE DELETED')
}

// En CommonJS:
// module.exports = {fetchAllArticles, fetchOneArticle, createArticle, updateArticle, deleteArticle};

// En ES6 Module
export { fetchAllArticles, fetchOneArticle, createArticle, updateArticle, deleteArticle };
```

[Retour à l'accueil](../README.md) / [Chapitre suivant](02_Initialisation.md)