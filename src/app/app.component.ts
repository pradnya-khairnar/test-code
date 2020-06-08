import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  @ViewChild("listInput") listInput: ElementRef<string>;
  arr = [];
  onClear(value: string) {
    this.arr.push(value);
    this.listInput.nativeElement.value = "";
  }
}
