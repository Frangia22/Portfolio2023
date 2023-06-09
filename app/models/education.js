module.exports = (sequelize, DataTypes) => {
    const Education = sequelize.define( 'education', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        institute: {
          allowNull: false,
          type: DataTypes.STRING(60)
        },
        title: {
          allowNull: false,
          type: DataTypes.STRING(60)
        },
        icon: {
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
        statusEducation: {
          allowNull: false,
          type: DataTypes.STRING(60)
        }
    },
    {
      freezeTableName: true,
      timestamps: false
    });
    return Education;
  };
    