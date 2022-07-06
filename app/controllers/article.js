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

export { fetchAllArticles, fetchOneArticle, createArticle, updateArticle, deleteArticle };