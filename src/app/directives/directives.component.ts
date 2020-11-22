import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  isActive:boolean = true;
  isLogin:boolean = false;
  color:string = "blue";
  dssv: any[] = [
    {hoTen: "Tèo", lop: "FE52"},
    {hoTen: "Duy", lop: "FE53"},
    {hoTen: "Dân", lop: "FE54"},
  ]
  imageUrl: string = "https://camerabox.vn/uploads/news/2018_07/chup-anh-phong-canh-thu-vi.jpg";

  template:string = "<span class='text-danger'>Hello</span>"

  constructor() { }

  ngOnInit(): void {
  }

}
