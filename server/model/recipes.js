module.exports = (sequelize, DataTypes, Model) => {
    class Recipes extends Model {}

    Recipes.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            origin: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            servings: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            cook_time: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            calories: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            diet: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            instructions: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'recipes',
            tableName: 'recipes',
        }
    )
    return Recipes
}
