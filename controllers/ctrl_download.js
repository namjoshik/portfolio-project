const path = require('path');
const file = path.join(__dirname, '../data', 'Kartik_Namjoshi.pdf');

exports.resumeDownload = (req, res, next) => {
  
  res.render('download');
  res.setHeader('Content-Disposition', 'attachment; filename="Kartik_Namjoshi.pdf"');
  res.download(file, (err) => {
    if (err) {
      console.error('Error downloading the file:', err);
      res.status(500).send('Unable to download the file.');
    }
  });
};