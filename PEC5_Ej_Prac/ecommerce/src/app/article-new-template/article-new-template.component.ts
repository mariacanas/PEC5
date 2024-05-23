import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'app-article-new-template',
    standalone: true,
    templateUrl: './article-new-template.component.html',
    styleUrls: ['./article-new-template.component.css'],
    imports: [CommonModule, ReactiveFormsModule]
})
export class ArticleNewTemplateComponent {
    article: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) {
        this.article = this.formBuilder.group({
            name: ['', Validators.required],
            price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
            imageUrl: ['', [Validators.required, Validators.pattern(/^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}(\/\S*)?\.(jpg|jpeg|png|gif)$/)]],
            enVenta: [false]
        });
    }

    get formControls() {
        return this.article.controls;
    }

    onSubmit() {
        this.submitted = true;

        if (this.article.invalid) {
            return;
        }
    }
}
