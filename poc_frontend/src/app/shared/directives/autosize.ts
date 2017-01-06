import { Directive, ElementRef, Renderer, AfterContentChecked, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: '[autosize]'
})
export class Autosize implements OnInit, AfterContentChecked {

  constructor(private element: ElementRef, private renderer: Renderer) {}

  public ngOnInit(): void {
  }

  ngAfterContentChecked(): void{
    this.adjust();
  }
  adjust(): void{
    this.element.nativeElement.style.overflow = 'hidden';
    this.element.nativeElement.style.height = 'auto';
    this.element.nativeElement.style.height = (this.element.nativeElement.scrollHeight - 10) + "px";
  }
}
