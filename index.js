const TelegramBot = require("node-telegram-bot-api");
const token = "6453093893:AAEgTRRxGvLfWuacK4yE8-mMteu5EqGrI0U";

const bot = new TelegramBot(token, { polling: true });

const all_codes = `(HOTHANDS) – Розривні удари у ближньому бою.
(LIQUOR) – Ваш герой стане дуже п’яним. 
(CATCHME) – Швидкий біг (спринт).
(GOTGILLS) – Швидке плавання.
(HOPTOIT) – Суперстрибок.
(SKYFALL) – Падіння з неба.
(DEADEYE) – Уповільнення часу при прицілюванні (х4).
(INCENDIARY) – Палаючі кулі.
Коди на машини
(COMET) – Спортивне авто «Comet».
(RAPIDGT) – Спортивне авто “Rapid GT”.
(VINEWOOD) – Лімузин «Limo».
(TRASHED) – Сміттєвоз «Trashmaster».
(HOLEIN1) – Гольфкар «Caddy»
(SNOWDAY) – Ковзаючі машини (дрифт).
(TURTLE) – Ремонт машини (набирати всередині авто). 
Коди на велосипеди та мотоцикли
(OFFROAD) – Ралійний мотоцикл Sanchez.
(ROCKET) – Спортивний мотоцикл «PCJ».
(BANDIT) – Велосипед «BMX».
Коди на гелікоптери та літаки
(BARNSTORM) – Літак для трюків.
(BUZZOFF) – Військовий вертоліт «Buzzard».
(FLYSPRAY) – Кукурудза «Duster».
`;

bot.on("callback_query", (query) => {
  console.log(query.data);
  const chatId = query.message.chat.id;
  if (query.data == "health") {
    bot.sendMessage(chatId, "🖤 чіт-код на здоровʼя: BAGUVIX");
  }
  if (query.data == "weapon") {
    bot.sendMessage(chatId, "🔫 чіт-код на зброю: LXGIWYL");
  }
  if (query.data == "other") {
    bot.sendMessage(chatId, all_codes);
  }
});
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  if (msg.text == "/start") {
    bot.sendMessage(
      chatId,
      "Вітаємо. Цей бот дає інформацію по чіт-кодах для Grant Theft Auto V."
    );
    // add buttons
    bot.sendMessage(chatId, "Виберіть платформу", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🖤 чіт-код на здоровʼя",
              callback_data: "health",
            },
          ],
          [
            {
              text: "🔫 чіт-код на зброю",
              callback_data: "weapon",
            },
          ],
          [
            {
              text: "👮 Всі інші чіт-коди",
              callback_data: "other",
            },
          ],
        ],
      },
    });
  }
});
