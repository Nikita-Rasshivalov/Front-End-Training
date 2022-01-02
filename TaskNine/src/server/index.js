const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('data/students.json')
const middlewares = jsonServer.defaults()
server.use(middlewares)
server.use(router)


server.listen(3000, () => {
  console.log('JSON Server is running')
})

server.put("/id:", (req, res) => {
  let object = req.body;
});