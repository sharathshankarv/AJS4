import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { ServicesOfCurdHttpService } from './../services/services-of-curd-http.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consume-http-post',
  templateUrl: './consume-http-post.component.html',
  styleUrls: ['./consume-http-post.component.css']
})
export class ConsumeHttpPostComponent implements OnInit{
  posts:any;
  
  constructor(private service: ServicesOfCurdHttpService){    
  }

  ngOnInit(){
    this.service.getPosts()
    .subscribe( posts =>  this.posts = posts )
  }

  createPost(title: HTMLInputElement){
    let post = {title: title.value};
    this.posts.splice(0,0,post)

    title.value = '';

    this.service.createPost(post)
    .subscribe(
        posts => {
          post['id'] = posts.id;          
        },
      (error:AppError) => {
        this.posts.splice(0,1);

        if(error instanceof NotFoundError)
          alert('page not found');
        else throw error;       
    })
  }

  updateInfo(post){    
    post.title = "Sharath shankar edited this";

    this.service.updateInfo(post)
    .subscribe(
      response => {
        console.log(response);
      },
      (error:AppError) => {
        if(error instanceof NotFoundError)
          alert('page not found')
        else throw error;
    })
  }

  deleteItem(post){
    let indexe = this.posts.indexOf(post);
    this.posts.splice(indexe,1);

    this.service.deletePost(post.id)
    .subscribe(
      null,
      (error:AppError) => {
        this.posts.splice(indexe,0,post);
        if(error instanceof NotFoundError){
          alert('Post has been alredy deleted')
        }else throw error;  
    })
  }
}
