module.exports = {
    status: (req, res) => {
        res.json({
            status: 'OK',
            statusCode: 200,
            message: 'Server is up and running'
        })
    }, 
    availableRoutes: (req, res) => {
        res.json({
            status: 'OK',
            statusCode: 200,
            message: 'These are all the supported URIs on the server',
            endpoints: {
                '/server-status': {
                    method: 'GET', 
                    description: 'check if the server is up',
                    response: 'server is up or down message'
                },
                '/api/users/fetch': {
                    method: 'GET',
                    description: 'fetch all the users registered on the database',
                    response: 'JSON array object having all the usernames and respective passwords'
                },
                '/api/user/register': {
                    method: 'POST',
                    description: 'register a user',
                    body: {
                        username: 'should be non empty',
                        password: 'non empty'
                    },
                    response: 'confirmation response along with registered username'
                },
                'api/user/login': {
                    method: 'POST',
                    description: 'send a request to login a user',
                    body: {
                        username: 'should be non empty', 
                        password: 'should be correct and non empty'
                    },
                    response: 'confirmation response along with requested username'
                }
            }
        })
    }
}
