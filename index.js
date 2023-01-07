const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const app = express();

// Set up Global configuration access
dotenv.config();


app.post("/user/generateToken", (req, res) => {
	// Validate User Here
	// Then generate JWT Token

	let jwtSecretKey = process.env.JWT_SECRET_KEY;
	let data = {
		time: Date(),
		userId: 12,
	}

	const token = jwt.sign(data, jwtSecretKey);

	res.send(token);
});

app.get("/user/validateToken", (req, res) => {
	// Tokens are generally passed in the header of the request
	// Due to security reasons.

	let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
	let jwtSecretKey = process.env.JWT_SECRET_KEY;

	try {
        const headToken = req.header(tokenHeaderKey);
		const token =req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
            return res.send("Successfully Verified");
        }else{
            // Access Denied
            return res.status(401).send(error);
        }
	} catch (error) {
		// Access Denied
		return res.status(401).send(error);
	}
});

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server is up and running on ${PORT} ...`);
});

