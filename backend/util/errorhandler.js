class ErrorHandler{

    constructor(message, statusCode) {
        this.message = message;
        this.statusCode = statusCode;
      }
    
      sendResponse(res) {
        res.status(this.statusCode).json({
          success: false,
          message: this.message,
        });
      }
}

module.exports = ErrorHandler