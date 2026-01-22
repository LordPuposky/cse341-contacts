const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');
const validation = require('../middleware/validate');

// @route   GET /contacts
// @desc    Get all contacts from the database
router.get('/', contactsController.getAll);

// @route   GET /contacts/:id
// @desc    Get a single contact by its ID
router.get('/:id', contactsController.getSingle);

// @route   POST /contacts
// @desc    Create a new contact with validation middleware
router.post(
    '/',
    validation.contactValidationRules(),
    validation.checkValidation,
    contactsController.createContact
);

// @route   PUT /contacts/:id
// @desc    Update an existing contact with validation middleware
router.put(
    '/:id',
    validation.contactValidationRules(),
    validation.checkValidation,
    contactsController.updateContact
);

// @route   DELETE /contacts/:id
// @desc    Delete a contact from the database
router.delete('/:id', contactsController.deleteContact);

module.exports = router;