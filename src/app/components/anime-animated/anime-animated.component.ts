import {Component, OnInit, OnDestroy } from '@angular/core';
import {KitsuAPIAnimeAnimated} from '../../services/API/KitsuAPIAnimeAnimated';
import {AnimateRandom} from '../../services/Animate/AnimateRandom';
import {AnimateInterface} from '../../services/Animate/AnimateInterface';

@Component({
  selector: 'anime-animated',
  templateUrl: './anime-animated.component.html',
  styleUrls: ['./anime-animated.component.scss']
})
export class AnimeAnimatedComponent implements OnInit, OnDestroy {

    animeList;
    animator: AnimateInterface

    constructor(animeAnimated: KitsuAPIAnimeAnimated, animator: AnimateRandom) {
        this.animeList = animeAnimated.getList();
        this.animator = animator;
    }

    public configureAnimator() {
        this.animator.setSelector('.anime-animated-image');
        this.animator.setList(this.animeList);
        this.animator.enable();
    }

    ngOnInit() {
        this.configureAnimator();
        this.animator.initializeAnimate()
    }

    public getYearNumbers(anime) {
        return anime.getYear().split('');
    }

    /**
     * {@inheritdoc}
     *
     * Disable async animator.
     */
    ngOnDestroy() {
        this.animator.disable();
    }
}
