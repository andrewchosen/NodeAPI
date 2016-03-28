module.exports = function(express){
    var router = express.Router();
    
    router.get('/v1', function(req, res){
        res.json({hello: 'world'});
    });
    
    router.get('/v1/status', function(req, res){
        res.json({healthy: true});
    });
    
    router.get('/v1/user/:id', function(req, res){
        res.json({ user: { id: req.params.id }});
    });
    
    return router;
}