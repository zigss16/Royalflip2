const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Proxy route
app.get('/proxy', async (req, res) => {
    try {
        const response = await axios.get('https://api.mainnet-beta.solana.com', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
