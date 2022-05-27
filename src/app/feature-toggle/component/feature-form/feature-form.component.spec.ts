import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MockFeatureService } from 'src/app/mocks/MockFeatureService';
import { Feature } from '../../model/feature.model';
import featureTestsModule from '../../module/feature-tests.module';
import { FeatureService } from '../../service/feature.service';

import { FeatureFormComponent } from './feature-form.component';

describe('FeatureToggleFormComponent', () => {
  let component: FeatureFormComponent;
  let fixture: ComponentFixture<FeatureFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureFormComponent],
      imports: featureTestsModule,
      providers: [{
        provide: FeatureService,
        useClass: MockFeatureService
      },
      {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            data: {
              feature: new Feature()
            }
          }
        }
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
