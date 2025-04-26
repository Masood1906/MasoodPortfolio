const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Build the project
console.log('Building project...');
execSync('npm run build', { stdio: 'inherit' });

// Path to the out directory
const outDir = path.join(__dirname, 'out');

// Function to recursively process HTML files
function processHtmlFiles(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processHtmlFiles(filePath);
    } else if (file.endsWith('.html')) {
      console.log(`Processing ${filePath}...`);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace asset paths
      content = content.replace(/href="\//g, 'href="/MasoodPortfolio/');
      content = content.replace(/src="\//g, 'src="/MasoodPortfolio/');
      
      // Fix double prefixes if they occur
      content = content.replace(/href="\/MasoodPortfolio\/MasoodPortfolio\//g, 'href="/MasoodPortfolio/');
      content = content.replace(/src="\/MasoodPortfolio\/MasoodPortfolio\//g, 'src="/MasoodPortfolio/');
      
      fs.writeFileSync(filePath, content);
    }
  });
}

// Create .nojekyll file
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');

// Process HTML files
processHtmlFiles(outDir);

console.log('Deployment preparation complete!');