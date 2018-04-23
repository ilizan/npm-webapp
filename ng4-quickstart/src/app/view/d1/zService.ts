import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map'; // (2)

@Injectable()
export class ZService {
    name = '我是服务';
    messages: string[] = [
        '天之骄子，加入修仙之路群',
        'Shadows，加入修仙之路群',
        'Keriy，加入修仙之路群'
    ];
    messages1: Array<{ id: number, text: string }> = [
        { id: 0, text: '天之骄子，加入修仙之路群' },
        { id: 1, text: 'Shadows，加入修仙之路群' },
        { id: 2, text: 'Keriy，加入修仙之路群' }
    ];
    constructor(private http: Http) {

    }
    getList() {
        return this.http
            .get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`)
            .map(res => res.json())
    }
    update(id:number, text:string) {
        console.log(1)
        this.messages1 = this.messages1.map(msg => {
            return msg.id === id ? { id, text } : msg;
        });
    }
}
