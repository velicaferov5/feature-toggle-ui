import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Feature } from '../../model/feature.model';
import { FeatureService } from '../../service/feature.service';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['../../style/feature.scss']
})
export class FeatureListComponent implements OnInit {

  displayedColumns: string[] = [
    "displayName",
    "technicalName",
    "description",
    "expiresOn",
    "inverted",
    "customerIds",
    "actions"
  ];

  dataSource: MatTableDataSource<Feature> = new MatTableDataSource();

  private subscriptions: Subscription[] = [];

  constructor(private service: FeatureService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.findAll();
  }

  private findAll() {
    this.subscriptions.push(
      this.service.findAll()
        .subscribe((value) => {
          this.dataSource.data = value;
        })
    );
  }

  invert(id: number, inverted: boolean) {
    this.subscriptions.push(this.service.invert(id, inverted).subscribe({
      next: event => {
        this.toastr.success("Feature Toggle Inverted!", "Success");
      },
      error: error => this.toastr.error(error.error.message, "Error")
    })
    );
  }

}
