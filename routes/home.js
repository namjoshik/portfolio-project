const express = require('express');

const jobController = require('../controllers/work_exp');

const router = express();

router.get('/qualifications', jobController.qualifications);
router.get('/projects', jobController.projectDetails);
router.get('/workexperience', jobController.workExp);
router.get('/', jobController.homePage);


module.exports = router;