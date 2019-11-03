import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil, map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { isPresent, isPresentAndHasValue } from '../../helpers/utils';

@Component({
  selector: 'app-card-viewer',
  templateUrl: './card-viewer.component.html',
  styleUrls: ['./card-viewer.component.scss']
})

export class CardViewerComponent implements OnInit, OnDestroy {

  private unSubscribeParam$ = new Subject();
  private routerState$: Observable<object>;
  public cardList: CardInterface[] = [];
  public cardDetailsObj: any;
  public isPresent = isPresent;

  constructor( private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.routerState$ = this.activatedRoute.paramMap.pipe(takeUntil(this.unSubscribeParam$), map(() => window.history.state));
    this.routerState$.subscribe((state: object) => {
      if (isPresent(state['selectedItemObj'])) {
        this.cardDetailsObj = state['selectedItemObj'];
        this.constructChildComponents();
        return;
      }
    });

  }

  public ngOnDestroy(): void {
    this.unSubscribeParam$.next();
    this.unSubscribeParam$.complete();
  }

  private constructChildComponents() {
    if (!isPresent(this.cardDetailsObj) && !isPresentAndHasValue(this.cardDetailsObj.sub)) {
      return;
    }
    for (let i = 0; i <= this.cardDetailsObj.sub.length; i++) {
      if (isPresent(this.cardDetailsObj.sub[i])) {
        this.cardList.push({
          imgSrc: this.cardDetailsObj.sub[i].icon,
          title: this.cardDetailsObj.sub[i].name,
          description: '',
          link: this.cardDetailsObj.sub[i].state
        });
      }
    }
  }

}

export interface CardInterface {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
}
