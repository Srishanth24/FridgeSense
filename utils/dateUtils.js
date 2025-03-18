const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};

const isExpired = (expirationDate) => {
    return new Date(expirationDate) < new Date();
};

const daysUntilExpiration = (expirationDate) => {
    const today = new Date();
    const expDate = new Date(expirationDate);
    const timeDiff = expDate - today;
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

export { formatDate, isExpired, daysUntilExpiration };