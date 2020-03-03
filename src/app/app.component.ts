import { NestedTreeControl } from '@angular/cdk/tree';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppActions } from './modules/root-store/actions';
import { AppState } from './modules/root-store/reducers';
import { selectCurrentUserIsAdminitrator, selectCurrentUserName } from './modules/root-store/selectors/current-user.selectors';

interface MenuItem {
  name: string;
  path?: string;
  children?: Array<MenuItem>;
}

const TREE_DATA: Array<MenuItem> = [
  {
    name: 'Dead store',
    children: [
      { name: 'Empty', path: '/dead-store/empty' },
      { name: 'Dead store sample', path: '/dead-store/sample' },
      { name: 'Manual solution', path: '/dead-store/manual-solution' },
      { name: 'Automatic solution w/ async pipe', path: '/dead-store/auto-solution' },
      { name: 'Bad async pipe', path: '/dead-store/bad-async-pipe' },
      { name: 'Good async pipe', path: '/dead-store/good-async-pipe' },
    ],
  },
  {
    name: 'Utilisateur',
    children: [
      {
        name: 'Détails',
        path: '/current-user/detail',
      },
    ],
  },
];

@Component({
  selector: 'ngs-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  treeControl = new NestedTreeControl<MenuItem>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuItem>();

  userName$: Observable<string>;
  isAdmin$: Observable<boolean>;

  constructor(
    private readonly store: Store<AppState>,
  ) {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit() {
    this.userName$ = this.store.pipe(select(selectCurrentUserName));
    this.isAdmin$ = this.store.pipe(select(selectCurrentUserIsAdminitrator));
  }

  hasChild = (_: number, node: MenuItem) => !!node.children && node.children.length > 0;

  adminChange(event: MatSlideToggleChange) {
    if (event.checked) {
      this.store.dispatch(AppActions.setCurrentUserAdmin());
    } else {
      this.store.dispatch(AppActions.setCurrentUserNonAdmin());
    }
  }

}
