const express = require("express")

const app = express()
app.get('/', (request, response) => {
    return response.json({
        title: "node",
        content: "express"
    })
})
app.listen(3333)