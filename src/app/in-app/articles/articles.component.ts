import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { ArticlesSource1Type } from '../../models/travel-app-data/articles-source-1-type';
import { ArticlesSource2Type } from '../../models/travel-app-data/articles-source-2-type';
import { ArticlesSource3Type } from '../../models/travel-app-data/articles-source-3-type';
import { ArticlesSource4Type } from '../../models/travel-app-data/articles-source-4-type';
import { SelectedArticlesType } from '../../models/travel-app-data/selected-articles-type';
import { TravelAppDataService } from '../../services/travel-app-data.service';

@Component({
  selector: 'app-articles',
  imports: [IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxButtonDirective, IgxIconComponent],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  public travelAppDataArticlesSource1: ArticlesSource1Type[] = [];
  public travelAppDataArticlesSource2: ArticlesSource2Type[] = [];
  public travelAppDataArticlesSource3: ArticlesSource3Type[] = [];
  public travelAppDataArticlesSource4: ArticlesSource4Type[] = [];
  public travelAppDataSelectedArticles: SelectedArticlesType[] = [];

  constructor(
    public travelAppDataService: TravelAppDataService,
  ) {}


  ngOnInit() {
    this.travelAppDataService.getArticlesSource1().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.travelAppDataArticlesSource1 = data;
        this.changeDetectorRef.markForCheck();
      }
    );
    this.travelAppDataService.getArticlesSource2().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.travelAppDataArticlesSource2 = data;
        this.changeDetectorRef.markForCheck();
      }
    );
    this.travelAppDataService.getArticlesSource3().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.travelAppDataArticlesSource3 = data;
        this.changeDetectorRef.markForCheck();
      }
    );
    this.travelAppDataService.getArticlesSource4().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.travelAppDataArticlesSource4 = data;
        this.changeDetectorRef.markForCheck();
      }
    );
    this.travelAppDataService.getSelectedArticles().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.travelAppDataSelectedArticles = data;
        this.changeDetectorRef.markForCheck();
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
