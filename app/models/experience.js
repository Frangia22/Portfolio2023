module.exports = (sequelize, DataTypes) => {
    const Experience = sequelize.define( 'experience', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        company: {
          allowNull: false,
          type: DataTypes.STRING(60)
        },
        position: {
          allowNull: false,
          type: DataTypes.STRING(60)
        },
        tasks: {
            allowNull: false,
            type: DataTypes.STRING(120)
        },
        dateStart: {
            allowNull: false,
            type: DataTypes.DATEONLY
        },
        dateEnd: {
            allowNull: false,
            type: DataTypes.DATEONLY
        },
    },
    {
      freezeTableName: true,
      timestamps: false
    });
    return Experience;
  };