const { body, validationResult } = require('express-validator');

const contactValidationRules = () => {
    return [
        body('firstName').notEmpty().withMessage('First name is required.'),
        body('lastName').notEmpty().withMessage('Last name is required.'),
        body('email').isEmail().withMessage('Please enter a valid email.'),
        body('favoriteColor').notEmpty().withMessage('Favorite color is required.'),
        body('birthday').notEmpty().withMessage('Birthday is required.')
    ];
};

const checkValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    // Error 412: Precondition Failed (Estándar para errores de validación)
    return res.status(412).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
    });
};

module.exports = {
    contactValidationRules,
    checkValidation
};