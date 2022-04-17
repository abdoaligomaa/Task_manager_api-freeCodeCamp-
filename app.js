const express=require('express')
const app=express()
const tasks=require('./routers/task')
const notFound=require('./middleware/error')
const handelError=require('./middleware/error-handling')

const xss=require('xss-clean')
const hemlet=require('helmet')
const cors=require('cors')
const rateLimit=require('express-rate-limit')

// swagger 
const swaggerUI=require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));


const port= process.env.PORT||4000

app.set('trust proxy',1)
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
// meddlewar 
app.use(limiter)
app.use(express.json())
app.use(cors())
app.use(hemlet())
app.use(xss())

app.use(express.static('./public'))
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(handelError)
// api get all tasks
// api creat new task 
// api get task by id 
// api remove task by id 
// api update task by id 
// api get all tasks


// app.get('/',(req,res)=>{
//     res.send('hellow task manager api ')
// })

app.listen(port,()=>console.log(`server is listen an port ${port}.....`))