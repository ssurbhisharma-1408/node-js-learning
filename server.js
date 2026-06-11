const http = require('http')

const server = http.createServer((req, res) => {

  // GET - Home page
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ 
      message: 'Server running',
      status: 'success'
    }))
  }

  // GET - Tasks
  else if (req.method === 'GET' && req.url === '/tasks') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ 
      tasks: ['Task 1', 'Task 2', 'Task 3']
    }))
  }

  // POST - Task add karo
  else if (req.method === 'POST' && req.url === '/tasks') {
    let body = ''
    
    req.on('data', chunk => {
      body += chunk.toString()
    })

    req.on('end', () => {
      const newTask = JSON.parse(body)
      res.writeHead(201, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ 
        message: 'Task added',
        task: newTask
      }))
    })
  }

  // 404
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Route nahi mila!' }))
  }

})

server.listen(3000, () => {
  console.log('Server running on port 3000!')
})
