    const jwt=require('jsonwebtoken');
    module.exports = (role) => {
        return (req, res, next) => {
            const token = req.headers.authorization.split(" ")[1];
            jwt.verify(token, 'todo-app-super-shared-secret', function (err, decoded) {
                
                if (err) {
                    res.json({ status: "error", message: err.message, data: null });
                }
                console.log("co vao day");
                console.log(decoded);
                if (decoded.role) {
                    let temp = 1;
                    if (decoded.role == 'user') {
                        temp = 1;
                    }
                    if (decoded.role == 'admin') {
                        temp = 2;
                    }
                    if (temp >= role) {
                        req.body.userId = decoded.id;
                        next();
                    } else{
                        res.json({ status: "Role not permit",role:temp});
                    }
                    console.log(temp+":"+role);
                }
            });
        }
    }
    // module.exports = (req, res, next) =>{
    //     try{
    //         const token = req.headers.authorization.split(" ")[1];
    //        // const decoded= jwt.verify(token, 'todo-app-super-shared-secret');
    //         req.userData= token;
    //     }
    //     catch(error){
    //         return res.status(401).json({
    //             message: 'Auth failed'
    //         });
    //     }
       
    //     next();

    // };