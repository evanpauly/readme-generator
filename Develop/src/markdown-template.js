module.exports = templateData => {
    const { title, description } = templateData;

    return `
        #${(title)}
        ##${(description)}
    `;
};