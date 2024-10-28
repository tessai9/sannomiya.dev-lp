const ejs = require('ejs');
const fs = require('fs');

// Data to be used in templates
let data = {
  // Your data here
};

const fileNameList = ['index', 'apparel'];

fileNameList.forEach(name => {
  const templateFile = `ejs/${name}.ejs`;
  const outputFile = `${name}.html`;

  ejs.renderFile(templateFile, data, {}, (error, str) => {
    if(error) {
      console.error(`Error rendering ${templateFile}: error`);
    }else{
      fs.writeFileSync(outputFile, str);
      console.log(`${templateFile} rendered to ${outputFile}`);
    }
  });
});
