const { createSessionforSmpp } = require("../helpers/smppConf");


exports.checkSrv = (req, res) => {
    // console.log(new Date().toISOString().substring(2,10));
    res.status(200).send({ message: "Server UP!" });
  };

exports.sendMessage =async (req,res)=>{
    smppRes = 1; 
    try {
         smppRes = await createSessionforSmpp();
    } catch (error) {
        console.log("Error sending message",error)
    }
   
    resMessage= (smppRes == 0) ? "success" : "failure"
    resBody={ status: resMessage}
    res
      .status(200)
      .header("Content-Type", "application/json")
      .send(resBody);
}
