import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/games.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-games',
  shadow: false,
})
export class RuxIconGames {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#games`}></use>
      </svg>
    );
  }
}
