import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/refresh.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-refresh',
  shadow: false,
})
export class RuxIconRefresh {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#refresh`}></use>
      </svg>
    );
  }
}
