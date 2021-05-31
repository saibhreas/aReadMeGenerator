

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !=="None"){
    if (license ==='MIT') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    }
    if (license ==='Apache') {
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    }
    if (license ==='Eclipse') {
      return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    }
    if (license ==='Eclipse') {
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    }
    
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !=="None"){
    if (license ==='MIT') {
      return `[![License: MIT](https://opensource.org/licenses/MIT)`;
    }
    if (license ==='Apache') {
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    }
    if (license ==='Eclipse') {
      return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    }
    if (license ==='Eclipse') {
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    }
    return "";
  }

  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license ==='MIT') {
    return `[![License: MIT](https://opensource.org/licenses/MIT)`;
  }
  if (license ==='Apache') {
    return `[![License](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license ==='Eclipse') {
    return `[![License]](https://opensource.org/licenses/EPL-1.0)`;
  }
  if (license ==='Eclipse') {
    return `[![License: MPL 2.0]](https://opensource.org/licenses/MPL-2.0)`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Contributors: ${data.name}
  
  ### Github User: ${data.github}
  
  #### Email: ${data.email}
  
  ## Purpose: ${data.purpose}
  
  ## Table of Content
  
  1. [Description](##description)
  2. [Installation](###instalation)
  3. [Usage](###usage)
  4. [Contributing](###contributing)
  5. [Technologies](###technologies)
  6. [Questions:(###qusetions)]
  
  ## Description
  
  ${data.description}
    
  ### Licence: ${data.lic}
  
  ${renderLicenseLink(data.lic)}
  
  ### Installation
  
  * ${data.run}  
  
  ### Usage
  
  * ${data.usage}  
  
  ### Technologies
  
  ${data.tech}

  ### Questions? Feel free to contact: ${data.email}
  
  ### Images
  
  ${data.imgs}
  
  ### Links
  
  ${data.links}
  
  `
}

module.exports = generateMarkdown;
