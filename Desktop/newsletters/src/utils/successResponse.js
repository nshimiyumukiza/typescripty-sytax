const successResponse=(res,status,mesg,datas)=>{
    res.status(status).json({
        message:mesg,
        data:datas
    })
}

export default successResponse