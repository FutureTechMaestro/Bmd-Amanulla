import express from 'express';
import code from 'qrcode';

const app = express();
const port = 5500;

app.get('/aman', (req, res) => {
    const url = 'https://www.google.com/'; 
    code.toDataURL(url, (err, qrcode) => {
        if(err) {
            res.status(500).send("Internal Server Error");
        } else {
            res.send(`
            <html>
            <head><title>QR Code Generator</title></head>
            <body>
                <h1>QR Code Generator</h1>
                <img src="${qrcode}" alt="Qr code">
            </body>
            </html>`);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  