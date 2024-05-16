import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterOutlet } from '@angular/router'
import { chatService } from './service/chat.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'app-chat';
  menssages: string[] = []
  newMenssage: string = ""

  constructor(private chatService: chatService){
    this.chatService.reciveMenssage().subscribe((menssage: string) => {
      console.log('Menssage recive from hub:', menssage)
      this.menssages.push(menssage)
    });

  }
  sendMenssage(){
    this.chatService.sendMenssage(this.newMenssage)
    this.newMenssage = ""
  }
}
