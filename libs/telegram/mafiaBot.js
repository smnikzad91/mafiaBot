const TelegramBot = require('node-telegram-bot-api');
const { main, role, ranger10, ranger13, mozakere } = require('./keyboards')
let { persianDate } = require('./../jalali')
const { ranger10Roles, ranger13Roles, mozakereRoles } = require('./role')

const token = "5350024052:AAEB-KmSIsaZmLt6KaQL29mgXbYp1uAOvZA"
const bot = new TelegramBot(token, {polling: true});
const adminId = 576170170

// bot.on('message', async (msg) => {
//     let chatId = msg.chat.id;  
//     let { mainKeyboard } = await main();
//     const opts = {reply_markup: mainKeyboard};
//     bot.sendMessage(chatId, 'Please Do Not Message Me!', opts);
// });
bot.onText(/\/start/, async (msg) => {
    let chatId = msg.chat.id; 
    let { mainKeyboard } = await main();
    const opts = {reply_markup: mainKeyboard};
    bot.sendMessage(chatId, 'سلام، خوش آمدید', opts);
});

bot.onText(/صفحه اصلی/, async (msg) => {
    let chatId = msg.chat.id; 
    let { mainKeyboard } = await main();
    const opts = {reply_markup: mainKeyboard};
    bot.sendMessage(chatId, 'لطفا انتخاب کنید', opts);
});


bot.onText(/درباره ما/, async (msg) => {
    let chatId = msg.chat.id; 
    let { mainKeyboard } = await main();
    const opts = {reply_markup: mainKeyboard};
    bot.sendMessage(chatId, 'مقداری متن در باره ما', opts);
});

bot.onText(/تماس با ما/, async (msg) => {
    let chatId = msg.chat.id; 
    let { mainKeyboard } = await main();
    const opts = {reply_markup: mainKeyboard};
    bot.sendMessage(chatId, 'جهت تماس لطفا به آی دی @smnikzad91 پیام دهید', opts);
});

bot.onText(/معرفی ربات/, async (msg) => {
    let chatId = msg.chat.id; 
    let { mainKeyboard } = await main();
    const opts = {reply_markup: mainKeyboard};
    bot.sendMessage(chatId, 'مقداری متن در مورد معرفی ربات', opts);
});

bot.onText(/دریافت نقش/, async (msg) => {
    let chatId = msg.chat.id; 
    let { mainKeyboard } = await role();
    const opts = {reply_markup: mainKeyboard};
    bot.sendMessage(chatId, 'سناریو مورد نظر را انتخاب کنید', opts);
});

//////////////////////////////

bot.onText(/تکاور 10/, async (msg) => {
    let chatId = msg.chat.id; 
    let { mainKeyboard } = await ranger10();
    let roles = await ranger10Roles();
    // console.log(roles)
    const opts = {reply_markup: mainKeyboard};
    let result = ''
    roles.forEach((item, index) => {
        result += `${++index}-${item}\n`
    });
    result += `\n${persianDate().date}\n\n`
    console.log(result)
    bot.sendMessage(chatId, result, opts);
    bot.sendMessage(adminId, result, opts);
});
bot.onText(/رندومایز مجدد تکاور ده نفره/, async (msg) => {
    let chatId = msg.chat.id; 
    let { mainKeyboard } = await ranger10();
    let roles = await ranger10Roles();
    const opts = {reply_markup: mainKeyboard};
    let result = ''
    roles.forEach((item, index) => {
        result += `${++index}-${item}\n`
    });
    result += `\n${persianDate().date}\n\n`
    console.log(result)
    bot.sendMessage(chatId, result, opts);
    bot.sendMessage(adminId, result, opts);
    bot.sendMessage(adminId, msg.chat.username);
});

bot.onText(/تکاور 13/, async (msg) => {
    let chatId = msg.chat.id; 
    let { mainKeyboard } = await ranger13();
    let roles = await ranger13Roles();
    // console.log(roles)
    const opts = {reply_markup: mainKeyboard};
    let result = ''
    roles.forEach((item, index) => {
        result += `${++index}-${item}\n`
    });
    result += `\n${persianDate().date}\n\n`
    bot.sendMessage(chatId, result, opts);
    bot.sendMessage(adminId, result, opts);
});

bot.onText(/رندومایز مجدد تکاور سیزده نفره/, async (msg) => {
    let chatId = msg.chat.id; 
    let { mainKeyboard } = await ranger13();
    let roles = await ranger13Roles();
    // console.log(roles)
    const opts = {reply_markup: mainKeyboard};
    let result = ''
    roles.forEach((item, index) => {
        result += `${++index}-${item}\n`
    });
    result += `\n${persianDate().date}\n\n`
    bot.sendMessage(chatId, result, opts);
    bot.sendMessage(adminId, result, opts);
});

bot.onText(/مذاکره 10/, async (msg) => {
    let chatId = msg.chat.id; 
    let { mainKeyboard } = await mozakere();
    let roles = await mozakereRoles();
    // console.log(roles)
    const opts = {reply_markup: mainKeyboard};
    let result = ''
    roles.forEach((item, index) => {
        result += `${++index}-${item}\n`
    });
    result += `\n${persianDate().date}\n\n`
    console.log(result)
    bot.sendMessage(chatId, result, opts);
    bot.sendMessage(adminId, result, opts);
});

bot.onText(/رندومایز مجدد مذاکره ده نفره/, async (msg) => {
    let chatId = msg.chat.id; 
    let { mainKeyboard } = await mozakere();
    let roles = await mozakereRoles();
    // console.log(roles)
    const opts = {reply_markup: mainKeyboard};
    let result = ''
    roles.forEach((item, index) => {
        result += `${++index}-${item}\n`
    });
    result += `\n${persianDate().date}\n\n`
    console.log(result)
    bot.sendMessage(chatId, result, opts);
    bot.sendMessage(adminId, result, opts);
});


bot.onText(/انتخاب سناریو/, async (msg) => {
    let chatId = msg.chat.id; 
    let { mainKeyboard } = await role();
    const opts = {reply_markup: mainKeyboard};
    bot.sendMessage(chatId, 'سناریو مورد نظر را انتخاب کنید', opts);
});