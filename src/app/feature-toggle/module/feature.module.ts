import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FeatureFormComponent } from "../component/feature-form/feature-form.component";
import { FeatureListComponent } from "../component/feature-list/feature-list.component";
import { FeaturePageComponent } from "../component/feature-page/feature-page.component";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatTableModule } from "@angular/material/table";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FeatureRoutingModule } from "./feature-routing.module";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [FeaturePageComponent, FeatureListComponent, FeatureFormComponent],
    imports: [FormsModule,
        CommonModule,
        FeatureRoutingModule,
        HttpClientModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        MatGridListModule,
        MatAutocompleteModule,
        MatToolbarModule,
        MatTableModule,
        MatSlideToggleModule
    ]
})
export class FeatureModule { }