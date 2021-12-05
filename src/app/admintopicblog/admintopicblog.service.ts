import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TopicBlogs } from './TopicBlogs';

@Injectable({
  providedIn: 'root'
})
export class TopicBlogsService {

  API_URL: string = 'https://localhost:44313';

  constructor(public http: HttpClient) { }

  getTopicBlog() {
    return this.http.get<TopicBlogs[]>(this.API_URL + "/api/TopicBlogs");
  }

  createTopicBlog(topicblog: TopicBlogs) {
    return this.http.post<TopicBlogs[]>(this.API_URL + "/api/TopicBlogs", topicblog);
  }
}
