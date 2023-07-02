import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AgGridModule } from "ag-grid-angular";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, AgGridModule, HttpClientModule, ButtonsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
