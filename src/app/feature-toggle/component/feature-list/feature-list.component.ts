import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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

  private subscriptions: Subscription[] = [];

  dataSource: MatTableDataSource<Feature> = new MatTableDataSource();

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

}
