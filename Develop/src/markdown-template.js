module.exports = templateData => {
    const { title, description, installation, usage, license, contribution, test, questions } = templateData;

    return `
    # ${(title)}
    ## Description: 
    ${(description)}

    ## Table of Contents

    * [Installation]
    * [Usage]
    * [Contributing]
    * [Tests]
        
        
    ## Installation:
    ${(installation)}

    ## Usage:
    ${(usage)}

    ## License:
    ${(license)}

    ## Contribution
    ${(contribution)}

    ## Test instructions
    ${(test)}

    ## Questions
    ${(questions)}


    `;
};