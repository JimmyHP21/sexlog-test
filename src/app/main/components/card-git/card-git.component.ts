import {Component, Input, OnInit} from '@angular/core';
import {GitUserModel} from '../../../models/git-user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-git',
  templateUrl: './card-git.component.html',
  styleUrls: ['./card-git.component.scss']
})
export class CardGitComponent implements OnInit {

  @Input()
  gitUser: GitUserModel;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goToGitPage(url): void {
    window.location.href = url;
  }

  goToListRepo(url): void {
    localStorage.setItem('urlRepo', url);
    this._router.navigateByUrl('/repo', {});
  }
}
