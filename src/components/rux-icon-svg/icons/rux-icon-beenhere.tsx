import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/beenhere.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-beenhere',
  shadow: false,
})
export class RuxIconBeenhere {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#beenhere`}></use>
      </svg>
    );
  }
}
