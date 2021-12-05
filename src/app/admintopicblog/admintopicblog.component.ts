import { Component, OnInit } from '@angular/core';
import { ProductdetailsComponent } from 'src/app/productdetails/productdetails.component';
import { TopicBlogsService } from './admintopicblog.service';
import { TopicBlogs } from './TopicBlogs';


@Component({
  selector: 'app-admintopicblog',
  templateUrl: './admintopicblog.component.html',
  styleUrls: ['./admintopicblog.component.css']
})
export class AdminTopicBlogsComponent implements OnInit {

  topicblogs: TopicBlogs[] = [];
  topicblog: TopicBlogs = {
    Disabled: false,
    Point: '',
    NameTopicBlogs: '',
  };

  constructor(public topicblogService: TopicBlogsService) { }

  ngOnInit(): void {
    this.getTopicBlogs();
  }

  getTopicBlogs(): void {
    this.topicblogService.getTopicBlog().subscribe((topicblogs) => {
      this.topicblogs = topicblogs;
    });
  }

  createTopicBlogs(): void {
    console.log(this.topicblog);
    this.topicblogService.createTopicBlog(this.topicblog).subscribe();
  }  
  /* onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }

      // Saved Image into varible
      this.Image = event.target.files[0];
    }
  } */
}
