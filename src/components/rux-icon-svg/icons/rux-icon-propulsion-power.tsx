import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/propulsion-power.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-propulsion-power',
  shadow: false,
})
export class RuxIconPropulsionPower {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#propulsion-power`}></use>
      </svg>
    );
  }
}
