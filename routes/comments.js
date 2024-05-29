const router = require(".");

router.post('/',async (req, res,next) => {
    try {
        const comment = await Comment.create({
            commenter: req.body.id,
            comment: req.bady.comment,
        });
    
        console.log(comment);
        const result = await Comment.populate(comment,{path:'commenter'});
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.route('/:id')

.patch(async (req,res,next) => {
    try {
        const result = await Comment.updateOne({
            _id: req.params.id,
        }, {
            comment: req.body.comment,
        });
        res.json(result);
    } catch (err) {
        console.error(err);
        next(err);
    }
})

.delete(async (req,res,next) => {
    try {
        const result = await Comment.deleteOne({_id: req.params.id});
        res.json(result);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;