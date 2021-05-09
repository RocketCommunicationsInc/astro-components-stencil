import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/explore-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-explore-off',
  shadow: false,
})
export class RuxIconExploreOff {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#explore-off`}></use>
      </svg>
    );
  }
}
