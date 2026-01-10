/**
 * Contacts controller to handle database operations
 */
const mongodb = require('../db/connection');

const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db('contacts_db').collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getSingle = async (req, res, next) => {
    const result = await mongodb.getDb().db('contacts_db').collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

module.exports = { getAll, getSingle };