import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AdminService } from './admin.service';
import { BlogData } from '../shared/BlogData';
import { Promise } from 'q';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  blogData: BlogData;
  errorMessage: String;
  TitleLabel: string = "Create New Post";
  blogTitle: string;
  blogContent: string;
  DescriptionLabel: string = "Add Description";

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private adminService: AdminService) {
    this.blogData = new BlogData();
  }

  ngOnInit() {
  }

  addPost(adminService: AdminService): void {
    console.log('Add Clicked');
    let reader = new FileReader();
    let fi = this.fileInput.nativeElement;
    this.blogData.BlogTitle = this.blogTitle;
    this.blogData.BlogContent = this.blogContent;
    let data = this.blogData;
    if (fi.files && fi.files[0]) {
      let fileToUpload = fi.files[0];
      this.readUploadedFileAsText(fileToUpload).then(function (result) {
        let image = result.split(':')[1];
        data.Image = image;
        console.log(data);
        adminService.uploadPost(data)
          .subscribe(d => {
            console.log(d);
          },
            error => {
              this.errorMessage = <any>error;
              console.log('Error on post: ' + this.errorMessage);
            });
      }, () => {
      });
    }
  };

  readUploadedFileAsText(inputFile: any): Promise<any> {
    let fileReader = new FileReader();
    return Promise((resolve, reject) => {
      fileReader.readAsDataURL(inputFile);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
    });
  };
}
