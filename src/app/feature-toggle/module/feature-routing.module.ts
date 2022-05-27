import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeatureFormComponent } from "../component/feature-form/feature-form.component";
import { FeaturePageComponent } from "../component/feature-page/feature-page.component";
import { FeatureResolver } from "../resolver/feature.resolver";

const routes: Routes = [
	{
		path: "",
		component: FeaturePageComponent
	},
	{
		path: "new",
		component: FeatureFormComponent
	},
	{
		path: "edit/:id",
		component: FeatureFormComponent,
		resolve: { feature: FeatureResolver }
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FeatureRoutingModule { }