import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";

const bot = new Telegraf("7013059216:AAEvRvoiUaDcFFmlafHBMU9dV8oJJbjOVzs");

bot.start((ctx) => {
  ctx.reply("The bot has started!");
});

bot.help((ctx) => {
  ctx.reply(
    "This is a help message. Use /start to begin, /help for assistance"
  );
});

bot.on(message("sticker"), (ctx) => {
  ctx.reply("You sent a sticker!");
});

bot.hears("hello", (ctx) => {
  ctx.reply("Hello there! Here to help!");
});

bot.command("say", (ctx) => {
    const message = ctx.message.text.split(" ").slice(1).join(" ");
    if (message) {
        ctx.reply(`You said: ${message}`);
        return;
    }

    ctx.reply("No message provided");
})

bot.command("info", (ctx) => {
  ctx.reply(
    "This bot is designed to assist you with various tasks. Use /start to get started, /say to say something, /help for assistance, or just type 'hello' to chat!"
  );
});

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
