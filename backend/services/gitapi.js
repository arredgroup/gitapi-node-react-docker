
const https = require("https");
const config = {
    headers: {'user-agent': 'node.js'},
    host: "api.github.com",
    port: 443,
    path: "/repos/arredgroup/gitapi-node-react-docker/commits",
    method: 'GET'
}
module.exports = {
    getInfoRepoCommits(){
        return new Promise((resolve, reject) => {
            const response = https.request(config, (resp) => {
                let data = '';
                // A chunk of data has been received.
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                   resolve(JSON.parse(data));
                });
            });
            response.end();
        })
    }
}