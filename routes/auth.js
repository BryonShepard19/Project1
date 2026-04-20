const router = require('express').Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

module.exports = router;

// =========================
// routes/projects.js
// =========================
const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const { getAll, create } = require('../controllers/projectController');

router.get('/', auth, getAll);
router.post('/', auth, create);

module.exports = router;