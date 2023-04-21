module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define( 'users', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING(60)
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(60)
      },
  },
  {
    freezeTableName: true,
    timestamps: false
  });
  return Users;
};
  