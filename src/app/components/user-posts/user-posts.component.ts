import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { PostsDetailComponent } from '../posts-detail/posts-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  posts: any[] = [];
  userId: number;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    public dialog: MatDialog
  ) {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.apiService.getUserPosts(this.userId).subscribe((data) => {
      this.posts = data;
    });
  }

  getDialogWidth(): string {
    const width = window.innerWidth;
    if (width < 1024) {
      return '80%';
    } else {
      return '50%'; 
    }
  }

  viewDetails(post: any): void {
    this.dialog.open(PostsDetailComponent, {
      data: post,
      width: this.getDialogWidth(),
    });
  }
}
