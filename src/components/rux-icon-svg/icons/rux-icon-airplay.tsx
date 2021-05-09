import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/airplay.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-airplay',
  shadow: false,
})
export class RuxIconAirplay {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#airplay`}></use>
      </svg>
    );
  }
}
