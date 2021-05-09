import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/maximize.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-maximize',
  shadow: false,
})
export class RuxIconMaximize {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#maximize`}></use>
      </svg>
    );
  }
}
