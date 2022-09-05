import { MessageContext, Telegram } from 'puregram';

export class Bot extends Telegram {
  public static instance: Bot;

  public commands = new Map<string, (context: MessageContext) => void>();

  constructor() {
    super({
      token: '5670379969:AAFL4x1Zma51bGS2JdifuBcmr8_V4kX-Mbo',
    });

    this.updates.startPolling().then(() => console.log('Bot started'));
    this.updates.on('message', (context) => {
      const fn = this.commands.get(context.text);
      if (fn) fn(context);
      else if (context.text === '/start') {
        return;
      } else context.send('Unknown PIN');
    });
  }
}
