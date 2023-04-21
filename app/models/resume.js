module.exports = (sequelize, DataTypes) => {
    const Resume = sequelize.define( 'resume', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        resume: {
          allowNull: false,
          type: DataTypes.STRING(160)
        },
    },
    {
      freezeTableName: true,
      timestamps: false
    });
    return Resume;
  };