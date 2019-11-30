const passport = require('passport');
const jwt = require('jsonwebtoken');
module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
  
  app.get('/auth/google/callback',  
  passport.authenticate('google', 

  { failureRedirect: '/', session: false }), (req, res) => {
      var token=jwt.sign( {
        email:req.user.email,
        role: req.user.role
      
      },
      'todo-app-super-shared-secret',
      {
        expiresIn: "1h"
        }
      
    );
    console.log(token);
    const htmlWithEmbeddedJWT = `
    <html>
      <script>
        // Save JWT to localStorage
        window.localStorage.setItem('access_token', '${token}');
        window.localStorage.setItem('user', '${req.user.name}');
        window.localStorage.setItem('id', '${req.user._id}');
        window.localStorage.setItem('role', '${req.user.role}');
        // Redirect browser to root of application
        window.location.href = '/';
      </script>
    </html>
    `;

    res.send(htmlWithEmbeddedJWT);
   
});
  app.get('/auth/facebook', passport.authenticate('facebook'));
  app.get('/auth/facebook/callback',  
  passport.authenticate('facebook', 

  { failureRedirect: '/', session: false }), (req, res) => {
    var token=jwt.sign( {
      email: "a"
    
    },
    'todo-app-super-shared-secret',
    {
      expiresIn: "1h"
      }
    
  );

    const htmlWithEmbeddedJWT = `
    <html>
      <script>
        // Save JWT to localStorage
        window.localStorage.setItem('access_token', '${token}');
        window.localStorage.setItem('user', '${req.user.name}');
        window.localStorage.setItem('id', '${req.user._id}');
        window.localStorage.setItem('role', '${req.user.role}');
        // Redirect browser to root of application
        window.location.href = '/';
      </script>
    </html>
    `;

    res.send(htmlWithEmbeddedJWT);
   
});
 
  
  app.get('/api/current_user', (req, res) => {
    console.log(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  
};