const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 
app.use(express.json()); 

// Sample login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
    const response = {
        isValid: true, 
        isAdmin: username.startsWith("admin") 
    };

    res.json({ success: true });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});