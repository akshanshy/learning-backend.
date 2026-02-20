const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Request received");

    res.write("Hello from backend server");
    res.end();
});

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
