module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Project', {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER
  });
};