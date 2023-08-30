var smpp = require("smpp");

async function createSessionforSmpp() {
    try {
      var session = smpp.connect(
          {
              url: "smpp://10.204.181.70:5019",
              auto_enquire_link_period: 10000,
              debug: true,
          },
          function () {
              session.bind_transceiver(
                  {
                      system_id: "8883",
                      password: "Bank8883",
                  },
                  function (pdu) {
                      if (pdu.command_status === 0) {
                          // Successfully bound
                          session.submit_sm(
                              {
                                  destination_addr: "0912356845",
                                  short_message: "Hello!",
                              },
                              function (pdu) {
                                  if (pdu.command_status === 0) {
                                      // Message successfully sent
                                      console.log(pdu.message_id);
                                      return 0;
                                  }
                                  else {
                                      return 1;
                                  }
                              }
                          );
                      }
                  }
              ); 
  
          }
      );
    } catch (e) {
      console.log(e);
      return 1;
    }
  }
  
  module.exports = { createSessionforSmpp };
  