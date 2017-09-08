const restify = requre('restify');
const server = restify.createServer({
    'name': 'osteapi',
    'version': '1.0.0'
    'version': '1.1.0'
});

requre('./routes/index')(server)