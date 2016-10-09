/**
 * Created by admin on 09/10/2016.
 */
import express from 'express'
import school from './school'

const router = express.Router();

router.use('/*', (req, res, next) => {
    res.setHeader("Expires", "-1");
    res.setHeader("Cache-Control", "must-revalidate, private");
    next();
});

router.use('/school', school);

export default router;