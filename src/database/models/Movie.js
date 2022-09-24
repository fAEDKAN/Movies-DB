module.exports = (sequelize, dataTypes) => {

    const alias = "Movie";

    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true, //es 'Primary Key'
            allowNull : false, //no soporta nulos (NOT NULL)
            autoIncrement : true //es AI (auto incrementable)
        },
        title : {
            type : dataTypes.STRING(500),
            allowNull : false
        },
        rating : {
            type : dataTypes.DECIMAL(3,1).UNSIGNED, //es decimal, de 3 digitos 1 es decimal
            allowNull : false
        },
        awards : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 0 //se aplica esto si tiene un valor por defecto
        },
        release_date : {
            type : dataTypes.DATE,
            allowNull : false,
        },
        length : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : true,
            defaultValue : null
        },
        genre_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : true, //soporta nulos porque su valor por defecto es 'null'
            defaultValue : null,
        }
    }

    const config = {
        tableName : 'movies',
        timestamps : true, //si no existen marcas de tiempo, poner 'false' (timestamps)
        underscored : true, //si la marca de tiempo tiene guión bajo "_"
    }

    const Movie = sequelize.define(alias, cols, config);

    return Movie
}