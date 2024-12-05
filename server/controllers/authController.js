const jwt = require("jsonwebtoken");
const { secretKey } = require("../config/keys");

// Hardcoded user credentials (for simplicity)
const users = {
    testuser: "password123",
};

const login = (req, res) => {
    const { username, password } = req.body;

    if (users[username] && users[username] === password) {
        const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
        res.json({ token });
    } else {
        res.status(401).json({ message: "Invalid username or password" });
    }
};

module.exports = { login };
