import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable, ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ServicesOfCurdHttpService {
  private url = "http://jsonplaceholder.typicode.com/posts";
  constructor(private http: Http) {    
   }

   getPosts(){
     return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.errorHandler);
   }

   createPost(post){
     return this.http.post(this.url, JSON.stringify(post))
      .map(respone => respone.json())
      .catch(this.errorHandler)
   }

   updateInfo(post){
     return this.http.put(this.url + '/' + post.id,post)
      .map(response => response.json())
      .catch(this.errorHandler)
   }

   deletePost(id){
     return this.http.delete(this.url + '/' + id)
      .map(response => response.json())
      .catch(this.errorHandler);
   }

  private errorHandler(error: Response){
    if(error.status === 404)
     return Observable.throw(new NotFoundError(error));

    return Observable.throw(new AppError(error));
  }
}
