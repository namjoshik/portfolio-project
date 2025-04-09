const path = require('path');
const fs = require('fs');

const resumePath = path.join(__dirname,'../data','work_exp.json');
const projectPath = path.join(__dirname,'../data','projects.json');
const qualiPath = path.join(__dirname,'../data','qualifications.json');

// const qualificationPath = [certPath, educationPath, skillPath];
// console.log(qualificationPath);
// const quali_details = [];

// for (item of qualificationPath){
//     fs.readFile(item, (err, fileContent) => {
//         if(err){
//             console.log(err);
//         }else{
//             // console.log(JSON.parse(fileContent));
//             quali_details.push(JSON.parse(fileContent));         
//         }
//     });
// };

exports.qualificationData = (cb) => {
    fs.readFile(qualiPath, (err, fileContent) => {
        if(err){
            cb([]);
        }else{
            cb(JSON.parse(fileContent));
        };
    });
};

exports.resumeData = (cb) => {
    fs.readFile(resumePath, (err, fileContent) => {
        if(err){
            console.log(err);
            cb([]);
        }else {
            cb(JSON.parse(fileContent));
        };
    });
};

exports.projectData = (cb) => {
    fs.readFile(projectPath, (err, fileContent) => {
        if(err){
            console.log(err);
            cb([]);
        }else {
            cb(JSON.parse(fileContent));
        };
    });
};