import { Injectable } from '@angular/core'
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class chatService {
  private hubConnection: HubConnection;


  constructor() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('http://localhost:5073/chat')
      .build()

      this.hubConnection.start()
        .then(() => console.log('Connection started'))
        .catch(err => console.log('Error while starting connection:' + err))
    
  }
    sendMenssage(menssage: string) {
      this.hubConnection.invoke('SendMenssage', menssage)
        .catch(err => console.error(err))
    }

    reciveMenssage(): Observable<string> {
      return new Observable<string>(observer => {
        this.hubConnection.on('ReciveMenssage', (menssage: string) => {
          observer.next(menssage);
        });
      });
    }
  
}
  