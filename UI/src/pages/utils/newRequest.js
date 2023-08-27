const axios = require('axios')

exporrts.newRequest = await axios.create({
    baseURL: "http://localhost:8800/api/auth/login", 
    withCredentials: true
});

// exports default newRequest;
