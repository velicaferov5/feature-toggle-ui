import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockFeatureService } from 'src/app/mocks/MockFeatureService';
import featureTestsModule from '../../module/feature-tests.module';
import { FeatureService } from '../../service/feature.service';

import { FeatureListComponent } from './feature-list.component';

describe('FeatureToggleListComponent', () => {
  let component: FeatureListComponent;
  let fixture: ComponentFixture<FeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureListComponent],
      imports: featureTestsModule,
      providers: [{
        provide: FeatureService,
        useClass: MockFeatureService
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
