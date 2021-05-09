import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/update.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-update',
  shadow: false,
})
export class RuxIconUpdate {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#update`}></use>
      </svg>
    );
  }
}
