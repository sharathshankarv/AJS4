import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consume-http-post',
  templateUrl: './consume-http-post.component.html',
  styleUrls: ['./consume-http-post.component.css']
})
export class ConsumeHttpPostComponent implements OnInit{
  posts:any;
  private url = "http://jsonplaceholder.typicode.com/posts";
  constructor(private http: Http){    
  }

  ngOnInit(){
    this.http.get(this.url)
    .subscribe(response => {
      this.posts = response.json();      
    })
  }

  createPost(title: HTMLInputElement){
    let post = {title: title.value};
    title.value = '';
    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0,0,post)
    })
  }

  updateInfo(post){    
    post.title = "Sharath shankar edited this";
    this.http.put(this.url + '/' + post.id,post)
    .subscribe(response => {
       console.log(response);
    })
  }

  deleteItem(post){
    this.http.delete(this.url + '/' + post.id)
    .subscribe(response => {
      let indexe = this.posts.indexOf(post);
      this.posts.splice(indexe,1);
    })
  }

}
