import axios from 'axios';

const slackWebhookUrl = "https://hooks.slack.com/services/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";
// console.log('SLACK_WEBHOOK_URL:', process.env.SLACK_WEBHOOK_URL);

export async function sendToSlack(channel: string, message: string): Promise<void> {
  if (!slackWebhookUrl) {
    throw new Error('SLACK_WEBHOOK_URL is not set in environment variables');
  }

  const payload = {
    channel,
    text: message,
  };

  await axios.post(slackWebhookUrl, payload);
}
