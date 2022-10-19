const express = require('express');
const router = express.Router();
const todo = require('../services/todo');

router.get('/', async function (req,res,next) {
    try{
        res.status(200).json(await todo.getAllTasks())
    }catch(err) {
        next(err)
    }
})

router.post('/new', async function(req,res,next) {
    try{
        res.status(200).json(await todo.addTask(req.body))

    }catch(err) {
        next(err)
    }
})

router.delete('/delete/:id',async function(req,res,next) {
    try{
        res.status(200).json(await todo.removeTask(req.params.id))

    }catch(err) {
        next(err)
    }
})

router.put('/edit', async function(req,res,next){
    try{
        res.status(200).json(await todo.UpdateTask(req.body))

    }catch(err) {
        next(err)
    }
})

module.exports = router