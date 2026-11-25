import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { DestinationsType } from '../../models/travel-app-data/destinations-type';
import { ImageSet1Type } from '../../models/travel-app-data/image-set-1-type';
import { ImageSet2Type } from '../../models/travel-app-data/image-set-2-type';
import { SelectedArticlesType } from '../../models/travel-app-data/selected-articles-type';
import { TravelAppDataService } from '../../services/travel-app-data.service';

@Component({
  selector: 'app-dashboard',
  imports: [IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxButtonDirective, IgxIconComponent, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  public listSelectedItem?: string;
  public listSelectedItem1?: string;
  public travelAppDataSelectedArticles: SelectedArticlesType[] = [];
  public travelAppDataDestinations: DestinationsType[] = [];
  public travelAppDataImageSet1: ImageSet1Type[] = [];
  public travelAppDataImageSet2: ImageSet2Type[] = [];

  constructor(
    public travelAppDataService: TravelAppDataService,
  ) {}


  ngOnInit() {
    this.travelAppDataService.getSelectedArticles().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.travelAppDataSelectedArticles = data;
        this.changeDetectorRef.markForCheck();
      }
    );
    this.travelAppDataService.getDestinations().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.travelAppDataDestinations = data;
        this.changeDetectorRef.markForCheck();
      }
    );
    this.travelAppDataService.getImageSet1().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.travelAppDataImageSet1 = data;
        this.changeDetectorRef.markForCheck();
      }
    );
    this.travelAppDataService.getImageSet2().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.travelAppDataImageSet2 = data;
        this.changeDetectorRef.markForCheck();
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
