const { sequelize } = require('../models');

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();