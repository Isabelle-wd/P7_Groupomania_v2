module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
        },    
    });

    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
          onDelete: "cascade",
        });
        Posts.hasMany(models.Likes, {
            onDelete: "cascade",
          });
    };
    return Posts;
}; 