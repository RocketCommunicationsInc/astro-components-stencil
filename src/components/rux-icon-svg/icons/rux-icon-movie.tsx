import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/movie.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-movie',
  shadow: false,
})
export class RuxIconMovie {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#movie`}></use>
      </svg>
    );
  }
}
