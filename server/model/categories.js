module.exports = (sequelize, DataTypes, Model) => {
    class Categories extends Model {}

    Categories.init(
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
            type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'categories',
            tableName: 'categories',
        }
    )
    return Categories
}
