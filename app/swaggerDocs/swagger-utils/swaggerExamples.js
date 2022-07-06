//~ ------------------------------ USERS

const userExample = {
    id: 'integer',
    firstname: 'string',
    lastname: 'string',
    email: 'string',
    password: 'string'
};

const usersProperties = {
    id: { type: 'integer' },
    firstname: { type: 'string' },
    lastname: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' }
};

//~ ------------------------------ ARTICLES

const articleExample = {
    id: 'integer',
    title: 'string',
    description: 'string',
    tags: 'string',
    created_at: 'string',
    updated_at: 'string'
};

const articlesProperties = {
    id: { type: 'integer' },
    title: { type: 'string' },
    description: { type: 'string' },
    tags: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
};

export { usersProperties, userExample, articleExample, articlesProperties };
