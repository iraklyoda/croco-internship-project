import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-todo.component.html',
  styleUrl: './user-todo.component.css',
})
export class UserTodoComponent implements OnInit {
  todos: any[] = [];
  userId: number;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.apiService.getUserTodos(this.userId).subscribe((data) => {
      this.todos = data;
    });
  }
}
