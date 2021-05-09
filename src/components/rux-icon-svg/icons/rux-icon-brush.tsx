import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/brush.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-brush',
  shadow: false,
})
export class RuxIconBrush {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#brush`}></use>
      </svg>
    );
  }
}
