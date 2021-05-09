import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/movie-creation.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-movie-creation',
  shadow: false,
})
export class RuxIconMovieCreation {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#movie-creation`}></use>
      </svg>
    );
  }
}
