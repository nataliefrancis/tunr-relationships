//Connect
var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://natalief@localhost:5432/tunr_relationships');

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var Artist = sequelize.import("./artist");
var Manager = sequelize.import("./manager");
var Song = sequelize.import("./song");
var Ad = sequelize.import('./ad');

Song.belongsTo(Artist);
Artist.hasMany(Song);

Manager.hasMany(Artist);
Artist.belongsTo(Manager);

Ad.belongsTo(Manager);
Manager.hasOne(Ad);

module.exports.models = {
	Artist: Artist,
	Manager: Manager,
	Song: Song,
	Ad: Ad
};
