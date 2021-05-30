

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !=="None"){
    return `![github license](https://img.shields.io/badge/license-${license}-brightgreen.svg)`
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !=="None"){
    return `###license ${renderLicenseBadge(license)}`
  }

  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Contributors: ${data.name}
  
  ### Github User: ${data.github}
  
  #### Email: ${data.email}
  
  ## Purpose: ${data.purpose}
  
  ## Table of Content
  
    1. [Licence](###Licence)
    2. [Installation](###Instalation)
    3. [Usage](###Usage)
    4. [Technologies](###Technologies)
    5. [Description](##Description)
  
  ## Description: ${data.description}
    
  ### Licence: ${data.lic}
  
  ${renderLicenseLink(data.lic)}
  
  ### Installation: ${data.run}  
  
  ### Usage: ${data.usage}  
  
  ### Technologies: ${data.tech}
  
  ### Images: ${data.imgs}
  
  ### Links: ${data.links}
  `
}

module.exports = generateMarkdown;
