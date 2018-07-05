import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { HttpModule } from '@angular/http';
import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  keyframes
} from '@angular/animations';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('myAwesomeAnimation', [
      state('small', style({
          transform: 'scale(1)',
      })),
      state('large', style({
          transform: 'scale(2)',
      })),
      transition('small => large', animate('100ms ease-in')),
      transition('small <=> large', animate('300ms ease-in', style({
        transform: 'translateY(40px)'
      }))),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ]))),
  ]),

  ],

})
export class PostComponent implements OnInit {
  state  = 'small'; /* for animations */
  posts: any[];

  constructor(private service: PostService) {
  }
  ngOnInit() {
    this.service.getAll()
    .subscribe(posts => this.posts = posts);
  }
  createPost(input) {
    // tslint:disable-next-line:prefer-const
    let post = {title: input.value};
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
    .subscribe(
      newPost => {
      post['id'] = newPost.id;
    },
    (error: AppError) => {
      this.posts.splice(0, 1);
      if (error instanceof BadInput) {
       // this.form.setErrors(error.originalError);
      } else {
          throw error;
      }
    });
  }

  updatePost(post) {
    this.service.update(post)
    .subscribe(
      updatedPost => {
      console.log(updatedPost);
    });
  }

  deletePost(post) {
    // tslint:disable-next-line:prefer-const
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
    .subscribe(
      null,
    (error: AppError) => {
      this.posts.splice(index, 0, post);
      if (error instanceof NotFoundError) {
        alert('This post already been deleted');
      } else {
        throw error;
      }
    });
  }
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
}

}
