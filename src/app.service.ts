import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEmoji(): string {
    const emoji = this.getEmojis();
    const randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];
    return randomEmoji;
  }

  getEmojis() {
    return ['👋', '👋🏻', '👋🏼', '👋🏽', '👋🏾', '👋🏿'];
  }
}
