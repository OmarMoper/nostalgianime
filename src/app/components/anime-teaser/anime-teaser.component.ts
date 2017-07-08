import {Component, Input} from '@angular/core';

// @NOTE: this component doesn't allow add directly a input because is
// intended to be used for list of anime, so that the parent component
// will provide the list.

@Component({
  selector: 'anime-teaser',
  templateUrl: './anime-teaser.component.html',
  styleUrls: ['./anime-teaser.component.scss']
})

export class AnimeTeaserComponent {
    @Input() anime
}
