import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/grid-on.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-grid-on',
  shadow: false,
})
export class RuxIconGridOn {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#grid-on`}></use>
      </svg>
    );
  }
}
