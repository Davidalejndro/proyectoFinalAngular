import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() dataInput:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.dataInput);
  }
  
  detailAccesorio(index:any){
    this.router.navigate(['/detail', index])
  }
}
