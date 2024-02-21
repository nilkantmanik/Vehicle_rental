
// class SuccessHandler{

//     constructor(message,statusCode,data){
//         // super(message);
//         this.message = message
//         this.statusCode= statusCode
//         this.data = data

//         // Error.captureStackTrace(this,this.constructor);
//     }

//     res.status(this.statusCode).json({
//         success:true,
//         message:succ.message,
//         data:succ.data
//     })
// }

// module.exports = SuccessHandler

class SuccessHandler {
  constructor(message, statusCode, data) {
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }

  sendResponse(res) {
    res.status(this.statusCode).json({
      success: true,
      message: this.message,
      data: this.data,
    });
  }
}

module.exports = SuccessHandler;
