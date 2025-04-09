const jobs = require("../models/job_details");
const path = require("path");
const file = path.join(__dirname, "../public", "files", "Kartik_Namjoshi.pdf");

exports.homePage = (req, res, next) => {
  res.render("index", {
    path: "/",
  });
};

exports.resumeDownload = (req, res, next) => {
  
  res.setHeader(
    "Content-Disposition",
    'attachment; filename="Kartik_Namjoshi.pdf"'
  );
  res.download(file, (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
      res.status(500).send("Unable to download the file.");
    }
  });
};

exports.workExp = (req, res, next) => {
  jobs.resumeData((job_desc) => {
    res.render("workExp", {
      jobs: job_desc,
      path: "/experience",
    });
  });
};

exports.projectDetails = (req, res, next) => {
  jobs.projectData((project_desc) => {
    res.render("projects", {
      projects: project_desc,
      path: "/projects"
    })
  })
};

exports.qualifications = (req, res, next) => {
  jobs.qualificationData((creds) => {
    res.render("qualifications", {
      qualifications: creds,
      path: '/qualifications'
    });
  })
}