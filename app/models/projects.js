
/*'use strict';
const {	Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Projects extends Model {
	};
	Projects.init({
		id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(60)
      },
      technologies: {
        allowNull: false,
        type: DataTypes.STRING(120)
      },
      description: {
          allowNull: false,
          type: DataTypes.STRING(120)
      },
      image: {
          allowNull: false,
          type: DataTypes.STRING(60)
      }
    },
    {
      sequelize,
      modelName: 'projects',
      timestamps: false
    });
	return Projects;
};
*/

module.exports = (sequelize, DataTypes) => {
    const Projects = sequelize.define( 'projects', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING(60)
        },
        technologies: {
          allowNull: false,
          type: DataTypes.STRING(100)
        },
        description: {
            allowNull: false,
            type: DataTypes.STRING(120)
        },
        image: {
            allowNull: false,
            type: DataTypes.STRING(60)
        }
    },
    {
      freezeTableName: true,
      timestamps: false
    });
    return Projects;
  };