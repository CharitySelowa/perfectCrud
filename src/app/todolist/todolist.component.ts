import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {//inject service

  tlist:any

  listForm =new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),

  })
  constructor(private crud:CrudService) { }

  ngOnInit(): void {
    this.crud.getTodolist().subscribe((list)=>{
     this.tlist=list
     console.table(this.tlist)
    })
  }

  addList(){
    const data={
      title:this.listForm.value.title,
      description:this.listForm.value.description,
    }

    console.log("this is the form",data)

  }

}
