const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find () {
    return db('schemes');
};

function findById (id) {
    return db('schemes')
        .where({ id })
        .first();
};

function findSteps (id) {
    return db('schemes')
        .join('steps', 'steps.id', 'steps.scheme_id')
        .where({ scheme_id: id })
        .select('steps.id', 'steps.instructions', 'schemes.scheme_name')
};

function add (scheme) {
    return db('schemes')
        .insert(scheme)
}

function update (changes, id) {
    return db('schemes')
        .where({ id })
        .update(changes)
}

function remove (id) {
    return db('schemes')
        .where({ id })
        .first()
        .del()
}