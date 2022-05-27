import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Feature } from '../../model/feature.model';
import { FeatureService } from '../../service/feature.service';

@Component({
  selector: 'app-feature-form',
  templateUrl: './feature-form.component.html',
  styleUrls: ['../../style/feature.scss']
})
export class FeatureFormComponent implements OnInit {

  public feature!: Feature;

  public title: string = "Add Feature";

  public form!: FormGroup;

  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private service: FeatureService
  ) { }

  ngOnInit(): void {
    this.feature = this.route.snapshot.data.feature;
    if (this.feature) {
      this.title = "Edit feature";
    } else {
      this.feature = new Feature();
    }
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) =>
      subscription.unsubscribe()
    );
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      displayName: [this.feature?.displayName],
      technicalName: [this.feature?.technicalName, Validators.required],
      description: [this.feature?.description],
      expiresOn: [this.feature?.expiresOn],
      customerIds: [this.feature?.customerIds, Validators.required],
      inverted: [this.feature?.inverted, Validators.required]
    });
  }

  save() {
    if (this.form.valid) {
      if (!this.feature) {
        this.feature = new Feature();
      }

      const featureCopy: Feature = Object.assign(
        this.feature,
        this.form.value
      );

      this.subscriptions.push(this.service.save(featureCopy).subscribe({
        next: event => {
          this.toastr.success("Feature Toggle saved!", "Success");
          this.router.navigate(["feature"]);
        },
        error: error => this.toastr.error(error.error.message, "Error")
      })
      );
    }
  }

  getErrorMessage(fieldName: string): string {
    if (this.form.get(fieldName)?.hasError("required")) {
      return "You must inform a value for " + fieldName;
    }

    if (this.form.get(fieldName)?.hasError("pattern")) {
      return "Invalid format for " + fieldName;
    }

    return "";
  }

}
