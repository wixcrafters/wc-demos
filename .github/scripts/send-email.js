const { google } = require('googleapis');

const {
  GMAIL_CLIENT_ID,
  GMAIL_CLIENT_SECRET,
  GMAIL_REFRESH_TOKEN,
  CLIENT_NAME,
  CLIENT_EMAIL,
  CLIENT_SLUG,
} = process.env;

const DEMO_URL = `https://demo.wixcrafters.com/${CLIENT_SLUG}`;

const outreachEmail = `Hi ${CLIENT_NAME} team,

My name is Umair, founder of Wix Crafters — a web development studio specialising in building high-performance websites for businesses like yours.

We came across ${CLIENT_NAME} and built a free modern website preview to show you what your online presence could look like — no strings attached, no payment required to view it.

View your preview: ${DEMO_URL}

If you like what you see, we would love to hop on a quick call to discuss how we can build this out fully for your business. No pressure — if it is not the right time, no worries at all.

Simply reply to this email or reach us at contact@wixcrafters.com

Best regards,
Umair Ali
Founder, Wix Crafters
wixcrafters.com`;

async function send() {
  const oauth2Client = new google.auth.OAuth2(
    GMAIL_CLIENT_ID,
    GMAIL_CLIENT_SECRET,
    'urn:ietf:wg:oauth:2.0:oob'
  );

  oauth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });

  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

  const subject = `We built a free website preview for ${CLIENT_NAME}`;

  const body = [
    `From: Wix Crafters <wixctesting@gmail.com>`,
    `To: wixctesting@gmail.com`,
    `Subject: [SEND TO CLIENT] ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/plain; charset=utf-8`,
    ``,
    `CLIENT: ${CLIENT_NAME}`,
    `CLIENT EMAIL: ${CLIENT_EMAIL || 'Not found — check manually'}`,
    `DEMO URL: ${DEMO_URL}`,
    ``,
    `--- COPY PASTE EMAIL BELOW ---`,
    ``,
    `To: ${CLIENT_EMAIL || 'CLIENT_EMAIL_HERE'}`,
    `Subject: ${subject}`,
    ``,
    outreachEmail
  ].join('\n');

  const encoded = Buffer.from(body).toString('base64url');

  await gmail.users.messages.send({
    userId: 'me',
    requestBody: { raw: encoded }
  });

  console.log('Email sent to wixctesting@gmail.com');
}

send().catch(console.error);
