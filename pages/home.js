const fs=require('fs');
const path=require('path');
const {layout}=require('../templates/layout');
exports.render=()=>layout({editorial:true,bodyHtml:fs.readFileSync(path.join(__dirname,'editorial-content.html'),'utf8')});
