import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/loupe.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-loupe',
  shadow: false,
})
export class RuxIconLoupe {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#loupe`}></use>
      </svg>
    );
  }
}
