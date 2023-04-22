import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userMessage:string = '';
  userMessages:any[] = [];
  chatGPT_message:string = '';
  chatGPT_messages:any = [];
  indexes = [0]



private apiUrl = 'https://api.openai.com/v1/chat/completions';
  constructor(private http: HttpClient) {}

  async createChatCompletion() {
    const model = 'gpt-3.5-turbo';
    const messages = [{role: 'user', content: this.userMessage}];
    const apiKey = environment.API_KEY

    this.indexes.push(this.indexes.length)
    this.userMessages.push(this.userMessage)

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    };

    const body = {
      model,
      messages
    };

    // await this.http.post(this.apiUrl, body, {headers}).subscribe((result:any) =>{
    //   console.log(result.choices[0].message.content)
    //   this.chatGPT_message = result.choices[0].message.content
    //   this.chatGPT_messages.push(result.choices[0].message.content)
    // })
  }

}

