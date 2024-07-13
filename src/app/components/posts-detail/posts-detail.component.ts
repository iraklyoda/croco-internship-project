import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule for the dialog buttons



@Component({
  selector: 'app-posts-detail',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './posts-detail.component.html',
  styleUrl: './posts-detail.component.css',
})



export class PostsDetailComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PostsDetailComponent>
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
