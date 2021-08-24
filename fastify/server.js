const fastify = require('fastify')({logger:true})
const port = 8000

fastify.register(require('fastify-cors'),{
    origin:'*'
})
let customer = []
let manager = [{id:1,"name":"Manohar"}]
let managerMessage = []
let customerMessage = []
fastify.get('/',async(req,res)=>{
    return { serverDate :new Date() }
})

fastify.get('/customer',async(req,res)=>{
    return {customer}
})

fastify.post('/customer',async(req,res)=>{
    let cust = customer.push(req.body.customer)
    return {cust}
})
fastify.get('/manager',async(req,res)=>{
    return {manager}
})

fastify.post('/manager',async(req,res)=>{
    let managers = manager.push(req.body.manager)
    return {managers}
})
fastify.get('/managermessage',async(req,res)=>{
    return {managerMessage}
})

fastify.post('/managermessage',async(req,res)=>{
    let managersmess = managerMessage.push(req.body.managermessage)
    return {managersmess}
})
fastify.get('/customermessage',async(req,res)=>{
    return {customerMessage}
})
fastify.post('/customermessage',async(req,res)=>{
    let customermess = customerMessage.push(req.body.customermessage)
    return {customermess}
})
const start = async()=>{
    try{
        // await fastify.listen(process.env.PORT||port, "0.0.0.0")
        await fastify.listen(8000)
    }
    catch(error){
        fastify.log.error(error)
        process.exit(1)
    }
}
start()