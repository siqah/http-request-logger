// Get a formatted timestamp
const getTimestamp = () => {
    const now = new Date();
    return now.toISOString();
};

module.exports = { getTimestamp };
