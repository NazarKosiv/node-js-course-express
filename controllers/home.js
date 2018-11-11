const getHomePage = (req, res) => {
    const pageTitle = 'Home';
    const route = '/';

    res.render('index', {pageTitle, path: route});
};

module.exports = getHomePage;
