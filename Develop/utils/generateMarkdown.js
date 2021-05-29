

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
    return `###license`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ### Contributors: ${data.name}  
  ### Github User: ${data.github}  
  #### Email: ${data.email}  
  
  ### Licences being used:  
  
  ### Technologies incorporated:${data.tach}
     
  
  
  
  ## Purpose: ${data.purpose}
  
  ### Usage:  ${data.usage}
  `


}

module.exports = generateMarkdown;
