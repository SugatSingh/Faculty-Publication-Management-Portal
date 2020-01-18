import { Component, OnInit, ViewChild } from '@angular/core';
import { Article, Proceeding } from '../shared/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  article : Article;
  proceeding : Proceeding;
  articlegroup : FormGroup;
  proceedinggroup : FormGroup;
  @ViewChild('articleform',{static:false}) articlegroupDirective;
  @ViewChild('proceedingform',{static:false}) proceedinggroupDirective;
  constructor(private fb:FormBuilder) {
    this.createArticleForm();
    this.createProceedingForm();
   }

  ngOnInit() {
  }

  createArticleForm(){
    this.articlegroup = this.fb.group({
      publication_id : ["",Validators.required],
      Editor :  ["",Validators.required],
      Volume :  ["",Validators.required],
      Periodical_Title :  ["",Validators.required],
      Month :  ["",Validators.required],
      Day :  ["",Validators.required],
      Pages :  ["",Validators.required],
      Issues :  ["",Validators.required],
      ISSN :  ["",Validators.required]
      });
  }

  createProceedingForm(){
    this.proceedinggroup = this.fb.group({
      publication_id : ["",Validators.required],
      Editor :  ["",Validators.required],
      region :  ["",Validators.required],
      Conference_Name :  ["",Validators.required],
      Month :  ["",Validators.required],
      Pagenumber :  ["",Validators.required],
      });
  }

  onarticleSubmit(){
    this.article = this.articlegroup.value;
    console.log(this.article);
    this.articlegroupDirective.resetForm();
    this.createArticleForm();
  }

  onproceedingSubmit(){
    this.proceeding = this.proceedinggroup.value;
    console.log(this.proceeding);
    this.proceedinggroupDirective.resetForm();
    this.createProceedingForm();
  }

}
