
<h1>HTTrack Telegram Bot</h1>

<h2>Developer</h2>
<ul>
  <li>Name: Harshit Sharma</li>
  <li>GitHub: <a href="https://github.com/harshitethic">harshitethic</a></li>
  <li>Instagram: <a href="https://instagram.com/harshitethic">@harshitethic</a></li>
</ul>

<h2>Usage</h2>
<ol>
  <li>Clone the repository:</li>
  <code>git clone https://github.com/harshitethic/httrack-telegram-bot.git</code>

  <li>Install dependencies:</li>
  <code>cd httrack-telegram-bot
 npm install</code>

  <li>Set up the Telegram bot:</li>
  <ul>
    <li>Create a new Telegram bot and obtain the API token. You can follow the instructions provided in the <a href="https://core.telegram.org/bots#3-how-do-i-create-a-bot">Telegram Bot documentation</a> to create a bot and get the token.</li>
    <li>Open <code>bot.js</code> file and replace <code>'YOUR_TELEGRAM_BOT_TOKEN'</code> with your actual Telegram bot token obtained in the previous step.</li>
  </ul>

  <li>Start the bot:</li>
  <code>npm start</code>

  <li>Interact with the bot:</li>
  <ul>
    <li>Start the conversation with your bot on Telegram.</li>
    <li>Use the following commands to interact with the bot:</li>
    <ul>
      <li><code>/start</code> - Start the bot.</li>
      <li><code>/help</code> - Display available commands.</li>
      <li><code>/copy {website url}</code> - Copy the specified website. Replace <code>{website url}</code> with the actual URL of the website you want to copy. For example, <code>/copy harshitethic.in</code>.</li>
    </ul>
    <li>The bot will copy the website using HTTrack, create a zip archive of the copied files, and share the zip file with you on Telegram.</li>
  </ul>
</ol>

<h2>Installation</h2>
<p>Ensure that you have Node.js installed on your system. You can download Node.js from the official website: <a href="https://nodejs.org">https://nodejs.org</a>.</p>

<h2>Requirements</h2>
<ul>
  <li>node-telegram-bot-api - Library to interact with the Telegram Bot API.</li>
  <li>archiver - Library to create zip archives.</li>
</ul>

<h2>License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
