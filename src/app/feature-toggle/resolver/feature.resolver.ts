import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { first, Observable } from "rxjs";
import { Feature } from "../model/feature.model";
import { FeatureService } from "../service/feature.service";

@Injectable({
	providedIn: "root"
})
export class FeatureResolver implements Resolve<Feature> {
	constructor(
		private router: Router,
		private FeatureService: FeatureService,
		private toastr: ToastrService
	) { }

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Feature> {
		return new Observable<Feature>((o) => {
			this.FeatureService
				.findById(route.params["id"])
				.pipe(first())
				.subscribe({
					next: (Feature) => {
						if (Feature) {
							o.next(Feature);
						} else {
							this.navigateAndNotify();
							o.next();
						}

						o.complete();
					},
					error: (error) => {
						this.toastr.error("Error in getting Feature", "Error");
					}
				});
		});
	}

	navigateAndNotify() {
		this.toastr.error("Feature not found!", "Error");
		this.router.navigate(["/feature"]);
	}
}
