/*CMD
  command: /menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

joined = User.getProperty("joinedToChanell");
// only user joined to chanell can access to /menu
if(!joined){ return }

var keyboard = "Balance, Invest plans,\n" + 
   "💵 Deposit";

Bot.sendKeyboard(keyboard, "Main menu");
