const express = require('express');
const cors = require('cors');
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Telegram bot
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false });

// Form submission endpoint
app.post('/submit-form', async (req, res) => {
  try {
    const { name, lastName, patronymic, phone, message } = req.body;
    
    // Validate required fields
    if (!name || !lastName || !patronymic || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Ім\'я, прізвище, по батькові та телефон обов\'язкові' 
      });
    }

    // Format message for Telegram
    const telegramMessage = `
🦷 *НОВА ЗАЯВКА З САЙТУ*

👤 *Ім'я:* ${name}
👤 *Прізвище:* ${lastName}
👤 *По батькові:* ${patronymic}
📞 *Телефон:* ${phone}
${message ? `💬 *Повідомлення:* ${message}` : ''}

⏰ *Час:* ${new Date().toLocaleString('uk-UA')}
🌐 *Джерело:* dentist-kharkiv.com
    `;

    // Send to Telegram
    await bot.sendMessage(process.env.TELEGRAM_USER_ID, telegramMessage, {
      parse_mode: 'Markdown'
    });

    res.json({ 
      success: true, 
      message: 'Дякуємо! Ми зв\'яжемося з вами найближчим часом.' 
    });

  } catch (error) {
    console.error('Error sending to Telegram:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Помилка відправки. Спробуйте ще раз.' 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Form endpoint: http://localhost:${PORT}/submit-form`);
}); 