const express = require('express')
const router = express.Router();
const {connectDB} = require('./db.js')
const Accessory = require('./schema.js')

router.get('/',async (req , res) => {
    try{
        const Accessories = await Accessory.find()
        res.json(Accessories)
    }catch (err){
        res.json({error : " An Error occured"})
    }
})


router.get('/:id' , async (req, res)=>{
    try{
        const AccessoryFound = await Accessory.findById(req.params.id)
        res.json(AccessoryFound)
    }
    catch(err){
        res.json({error : " An error occurred"})
    }
})

router.post('/add-accessory', async (req , res)=>{
    const newAccessory = new Accessory({
        AccessoryID : req.body.AccessoryID,
        item : req.body.item,
        type : req.body.type,
        material : req.body.material,
        function : req.body.function , 
        brands : req.body.brands , 
        trends : req.body.trends,
    })
    try{
        const saveAccessories = await newAccessory.save()
        res.json(saveAccessories)
    }
    catch (err){
        res.json({error : "An error occured"})
    }
})

router.patch('/:id' , async (req,res)=>{
    try{
        const AccessoryFound = await Accessory.findByIdAndUpdate(req.params.id, req.body , {new : true});
        if(!AccessoryFound){
            return res.status(404).json({error : "Accessory not found "})
        }
        res.json(AccessoryFound);
    }catch (err){
        res.status(500).send('Error: '+ err)
    }
})

router.delete('/:id' , async (req , res)=>{
    try{
        const AccessoryFound = await Accessory.findByIdAndUpdate(req.params.id , req.body , {new : true});
        if(!AccessoryFound){
            return res.status(404).json({error : "Accessory not found "})
        }
        res.send('Accessory deleted');
    }catch (err){
        res.status(500).send('Error:' +err)
    }
})

connectDB()

module.exports = router