module.exports = templateData => {
    const { title, description } = templateData;

    return `
        #Title: ${(title)}
        ## Description: ${(description)}
    `;
};