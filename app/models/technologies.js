module.exports = (sequelize, DataTypes) => {
    const Technologies = sequelize.define( 'technologies', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        technology: {
          allowNull: false,
          type: DataTypes.STRING(60)
        },
        icon: {
          allowNull: false,
          type: DataTypes.STRING(60)
        },
    },
    {
      freezeTableName: true,
      timestamps: false
    });
    return Technologies;
  };