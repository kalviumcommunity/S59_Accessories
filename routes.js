const express = require('express')
const router = express.Router();
const {connectDB} = require('./db.js')
const Accessory = require('./schema.js')
const Joi = require('joi'); 

const userSchema = Joi.object({
    item: Joi.string().required(),
    type: Joi.string().required(),
    image: Joi.string(),
    material: Joi.array(),
    function : Joi.string()
})

const checkValidation = (input, schema) => {
    const { error } = schema.validate(input)
    if (error) {
        return false
    }
    else {
        return true
    }
}


router.get('/',async (req , res) => {
    try{
        const Accessories = await Accessory.find()
        res.json(Accessories)
    }catch (err){
        res.json({error : " An Error occured while getting the data ."})
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

router.get('/:id' , async (req, res)=>{
    try{
        const AccessoryFound = await Accessory.findById(req.params.id)
        res.json(AccessoryFound)
    }
    catch(err){
        res.json({error : " An error occurred 1"})
    }
})

router.post('/add-accessory', async (req, res) => {
    const isValid = checkValidation(req.body, userSchema);
    if (!isValid) {
        return res.status(400).json({ error: 'Invalid input data' });
    }
    const newAccessory = new Accessory({
        AccessoryID: req.body.AccessoryID,
        item: req.body.item,
        type: req.body.type,
        image: req.body.image,
        material: req.body.material,
        function: req.body.function
    });

    try {
        const saveAccessories = await newAccessory.save();
        res.json(saveAccessories);
    } catch (err) {
        console.error('Error adding accessory:', err);
        res.status(500).json({ error: 'An error occurred while saving the accessory' });
    }
});

router.put('/:id' , async (req,res)=>{
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
        const AccessoryFound = await Accessory.findByIdAndDelete(req.params.id , req.body , {new : true});
        if(!AccessoryFound){
            return res.status(404).json({error : "Accessory not found "})
        }
        res.json('Accessory deleted');
    }catch (err){
        res.status(500).send('Error:' +err)
    }
})

connectDB()

module.exports = router