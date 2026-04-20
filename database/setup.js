const { User } = require('../models');
const bcrypt = require('bcrypt');

(async () => {
  const password = await bcrypt.hash('password', 10);
  await User.create({ email: 'test@test.com', password });
  console.log('Seeded');
  process.exit();
})();