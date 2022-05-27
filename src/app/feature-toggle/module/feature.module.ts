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
import { MatMomentDatetimeModule } from "@mat-datetimepicker/moment";
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS } from "@angular/material-moment-adapter";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDatetimepickerModule, MatNativeDatetimeModule } from "@mat-datetimepicker/core";
import { MatNativeDateModule } from "@angular/material/core";

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
        MatSlideToggleModule,
        MatMomentDatetimeModule,
        MatMomentDateModule,
        MatDatepickerModule,
        MatDatetimepickerModule,
        MatNativeDateModule,
        MatNativeDatetimeModule
    ]
})
export class FeatureModule { }