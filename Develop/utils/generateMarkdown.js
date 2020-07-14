// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.descriptions}
  
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contribution](#Contribution)
  5. [Tests](#Tests)
  6. [Questions](#Questions)

## Installation
\`\`\`
${data.installations}
\`\`\`

## Usage
${data.usageDetails}

## License 
![License badge](https://img.shields.io/badge/license-${data.license}-green)
This project uses a ${data.license} license.

## Contribution
\`\`\`${data.contribute}\`\`\`

  ## Tests
\`\`\`${data.tests}\`\`\`

## Questions
 Gihub username : <a href=${data.userName}>${data.userName}</a>
 Email Address : <a href=${data.email}>${data.email}</a>
  `;
}

module.exports = generateMarkdown;