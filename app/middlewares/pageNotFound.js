module.exports = (req, res) => {
    return res.status(404).json({
        status: 'Missing Resource',
        statusCode: 404,
        message: 'The requested resource is not available on the server',
        details: 'Hit the \'/available\' URI for all the available endpoints on the server'
    })
}
