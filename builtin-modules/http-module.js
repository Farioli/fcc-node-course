const http = require('http');

// Creates a server
const server = http.createServer((request, response) => {

    // console.log(request);

    if(request.url === '/'){

        // Shorhand to say write & end
        response.end('Welcome to our home page');
    }

    if(request.url === '/about'){

        // Shorhand to say write & end
        response.end('About');
    }

    // Prepare
    response.write('<h1>Ooops!</h1><p>We can\'t seem to find the page you are looking for </p> <a href="/">Back Home</a>');
    response.end();
});

// Port where the server listen
server.listen(5000);