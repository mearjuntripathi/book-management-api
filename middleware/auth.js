function validateUser(req, res, next) {
    const token = req.header?.bearer;
    if(token){
        const {_id, email, name} = getUser(token);
        console.log(_id, email, name);
        return next();
    }
    res.send(401).json({message: 'You Are not Autherized'});
}

// Middleware to validate email
function validateEmail(req, res, next) {
    const email = req.body.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
    }
    next(); // Proceed to the next middleware or route handler
}

// Middleware to validate password
function validatePassword(req, res, next) {
    const password = req.body.password;
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/; // At least 8 characters, alphanumeric and symbol
    if (!passwordRegex.test(password)) {
        return res.status(400).json({ message: 'Password must be at least 8 characters long and contain at least one letter, one number, and one special character' });
    }
    next(); // Proceed to the next middleware or route handler
}