import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:string = ''
  chatGPT_message:string = ''

private apiUrl = 'https://api.openai.com/v1/chat/completions';
  constructor(private http: HttpClient) {}

  async createChatCompletion() {
    const model = 'gpt-3.5-turbo';
    const messages = [{role: 'user', content: this.message}];
    const apiKey = environment.API_KEY

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    };

    const body = {
      model,
      messages
    };

    await this.http.post(this.apiUrl, body, {headers}).subscribe((result:any) =>{
      console.log(result.choices[0].message.content)
      this.chatGPT_message = result.choices[0].message.content
    })
  }

}

