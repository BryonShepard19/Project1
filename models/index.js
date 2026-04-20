const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const User = require('./User')(sequelize, DataTypes);
const Project = require('./Project')(sequelize, DataTypes);

User.hasMany(Project, { foreignKey: 'userId' });
Project.belongsTo(User, { foreignKey: 'userId' });

module.exports = { sequelize, User, Project };