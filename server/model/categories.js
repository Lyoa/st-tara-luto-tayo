module.exports = (sequelize, DataTypes, Model) => {
    class Categories extends Model {}

    Categories.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            }, 
            category_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },            
        },
        {
            sequelize,
            modelName: 'categories',
            tableName: 'categories'
        }
    )
    return Categories
}