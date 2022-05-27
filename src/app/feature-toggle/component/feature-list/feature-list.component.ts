import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Feature } from '../../model/feature.model';
import { FeatureService } from '../../service/feature.service';
import { Utils } from '../../util/utils';

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

  constructor(private service: FeatureService) { }

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

  formatDate(date: Date): string {
    return Utils.formatDate(date);
  }

}
