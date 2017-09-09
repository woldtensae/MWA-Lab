const fs = require('fs');
const streamOperation = () => {
    const crd = fs.createReadStream(path.join(__dirname,filePath));
    return rs;
}
process.on('message', (msg) => {
    const data = streamOperation();
    process.send(data);
})