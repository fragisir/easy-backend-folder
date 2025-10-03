#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

const targetDir = process.argv[2] || "backend-template";
const templateDir = path.join(__dirname, "template");

fs.copy(templateDir, targetDir)
  .then(() => {
    console.log(`✅ Backend template copied to ./${targetDir}`);
    console.log(`👉 cd ${targetDir}`);
    console.log("👉 npm install");
  })
  .catch((err) => {
    console.error("❌ Error copying template:", err);
  });
