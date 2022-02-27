module.exports = templateData => {
    const { title, description, installation, usage, license, contribution, test, questions, username, email } = templateData;

return `
    # ${(title)}

    ## Description
    ${(description)}

    ## Table of Contents

    * [Installation](#Installation)
    * [Usage](#Usage)
    * [Contribution](#Contribution)
    * [Tests](#Tests)
    * [Questions](#Questions)
        
      
    ## Installation
    ${(installation)}

    
    ## Usage
    ${(usage)}


    ## License
    ${(license)}

    
    ## Contribution
    ${(contribution)}

    
    ## Tests
    ${(test)}

    
    ## Questions
    GitHub: (github.com/${(username)})
    Email: ${(email)}
    ${(questions)}

    `;
};