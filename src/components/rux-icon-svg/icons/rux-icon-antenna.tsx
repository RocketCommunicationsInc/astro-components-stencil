import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/antenna.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-antenna',
  shadow: false,
})
export class RuxIconAntenna {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#antenna`}></use>
      </svg>
    );
  }
}
