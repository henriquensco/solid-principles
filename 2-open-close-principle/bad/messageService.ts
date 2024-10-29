type Message = {
  to: string;
  message: string;
}

export class MessageService {
  sendNotification(service: string, message: Message) {
    switch (service) {
      case 'SMS':
        console.log('send sms');
        
        break;
      case 'EMAIL':
        console.log('send email');
        
        break;
      case 'PUSHER':
        console.log('send pusher notification');
        
        break;
    }
  }
}

const messageService = new MessageService();

messageService.sendNotification('PUSHER', {to: 'user1', message: 'Message about bad open close principle'});