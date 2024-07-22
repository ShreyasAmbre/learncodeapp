import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '@core/models/post.model';
import { filter, from, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  
  
  constructor(private http: HttpClient){}


  addElement(counter:number, eleId:string, txt?:string){
    let text = txt ? txt : 'Video'
    let ele = document.createElement('li')
    ele.innerText = `${text} ${counter}`
    document.getElementById(eleId)?.append(ele)
  }



  getUsers():Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      tap(data => console.log('MAP tap(), Blog Posts Data ===>', data)), // debuggin RxJs operator
    )
  }


  getPosts(url: string): Observable<Posts[]>{
    return this.http.get<Posts[]>(url).pipe(
      tap(data => console.log("TAP() data", data)),
      map(data => {
        return data
      })
    )
  }


  getPostByFilter(url: string, userId: number): Observable<Posts[]> {
    return this.http.get<Posts[]>(url).pipe(
      // Uncomment if you want to log the data
      // tap(data => console.log('TAP() data', data)),
      map(posts => posts.filter(post => post.userId == userId)) // Adjust the condition based on your requirement
    );
  }

}
