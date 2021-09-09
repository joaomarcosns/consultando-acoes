const app = require("./server")

app.listen(3333, () => {
    console.log('server running on http://localhost:3333/company');
})