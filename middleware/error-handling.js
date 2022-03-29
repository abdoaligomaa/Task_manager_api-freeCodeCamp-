const handelError=(err,req,res,next)=>{
    res.status(404).json({error:err})
}

module.exports=handelError