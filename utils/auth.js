// this function is to check to se eif a session is  logged in and if not redirect to the login page

const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;