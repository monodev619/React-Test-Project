/**
 * Created by admin on 09/10/2016.
 */
import express from 'express'
import School from '../models/school'

const router = express.Router();

router.post('/save', function (req, res, next) {

    var body = req.body;
    var school = new School({
        city: body.city,
        school: body.school,
        flightnum: body.flightnum,
        curSchool: body.curSchool,
        wechat: body.wechat
    });

    school.save(function (err, school) {
        if (err) throw err;

        res.json({
            result: 'Success'
        });
    })
});

export default router