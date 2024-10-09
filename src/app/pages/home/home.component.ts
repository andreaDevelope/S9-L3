import { Component } from '@angular/core';
import { iJSONresponse, iPosts } from '../../modules/i-posts';

@Component({
  selector: '.app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  featuredPost!: iPosts;
  postsArr: iPosts[] = [];
  ngOnInit() {
    fetch('../../../assets/allegato/db.json')
      .then((res) => {
        if (res.ok) {
          return <Promise<iJSONresponse>>res.json();
        } else {
          throw new Error('errore nella richiesta');
        }
      })
      .then((res) => {
        console.log(res);
        res.posts.forEach((post) => {
          if (post.active) {
            this.featuredPost = post;
            // console.log(this.featuredPost); prende l'ultimo
          } else {
            this.postsArr.push(post);
            this.postsArr = this.postsArr.slice(0, 4);
            // console.log(this.postArr);
          }
        });
      })
      .catch((e) => console.log(e));
  }
}
