const TelegramBot = require('node-telegram-bot-api');
const { exec } = require('child_process');
const archiver = require('archiver');
const fs = require('fs');

// Telegram bot token
const token = 'Telegram_bot_token';
// HTTrack command
const httrackCommand = 'httrack --mirror';

// Create a new Telegram bot instance
const bot = new TelegramBot(token, { polling: true });

// Start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome to the HTTrack bot! Send /help to see available commands.');
});

// Help command
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    'Commands:\n' +
      '/start - Start the bot\n' +
      '/help - Display available commands\n' +
      '/copy {website url} - Copy the specified website'
  );
});

// Copy command
bot.onText(/\/copy (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const websiteUrl = match[1];

  bot.sendMessage(chatId, 'Copying website...');

  try {
    // Execute the HTTrack command
    await executeCommand(`${httrackCommand} ${websiteUrl}`);

    bot.sendMessage(chatId, 'Website copied successfully!');

    // Create a zip file
    const outputFilePath = 'website.zip';
    const output = fs.createWriteStream(outputFilePath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => {
      // Send the zip file to the user
      bot.sendDocument(chatId, outputFilePath);
    });

    archive.pipe(output);
    archive.directory(websiteUrl, false);
    archive.finalize();
  } catch (error) {
    bot.sendMessage(chatId, 'An error occurred while copying the website.');
  }
});

// Function to execute a command asynchronously
function executeCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(stderr); // Log the error message
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
