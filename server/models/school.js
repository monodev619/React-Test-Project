/**
 * Created by admin on 09/10/2016.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schoolSchema = new Schema({
    city: { type: String },
    school: { type: String },
    flightnum: { type: String },
    curSchool: { type: String },
    wechat: { type: String }
});

module.exports = mongoose.model('School', schoolSchema, 'school');