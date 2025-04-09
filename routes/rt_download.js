const express = require('express');
const downloadController = require('../controllers/work_exp');

const router = express();

router.get('/download', downloadController.resumeDownload);

module.exports = router;