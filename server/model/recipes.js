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
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            origin: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            servings: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            cook_time: {
                type: DataTypes.STRING,
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
            ingredients: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'recipes',
            tableName: 'recipes',
        }
    )
    return Recipes
}
