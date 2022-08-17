// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    case "GNU":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
    case "BSD":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
    case "Eclipse":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "ISC":
      return "(https://opensource.org/licenses/ISC)";
    case "Apache":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "GNU":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    case "Mozilla":
      return "(https://opensource.org/licenses/MPL-2.0)";
    case "BSD":
      return "(https://opensource.org/licenses/BSD-3-Clause)";
    case "Eclipse":
      return "(https://opensource.org/licenses/EPL-1.0)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const Licensestring =
    renderLicenseBadge(license) + renderLicenseLink(license);
  return Licensestring;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title
  ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

- [Installation](#install)
- [Usage](#usage)
- [Credits](#contribute)
- [License](#license)


  ## Install
  ${data.install}


  ## Usage
  ${data.usage}


  ## Credit
  ${data.contribute}


  ## License
  ${renderLicenseSection(data.license)}
  

  ## Badges
  
  ## Test
  ${data.test}

  ## Questions
    -${data.gitHub}
    -${data.email}   
`;
}

module.exports = generateMarkdown;
