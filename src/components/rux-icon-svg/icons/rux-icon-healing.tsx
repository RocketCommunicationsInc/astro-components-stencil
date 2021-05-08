import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/healing.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-healing',
  shadow: false,
})
export class RuxIconHealing {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#healing`}></use>
      </svg>
    );
  }
}
