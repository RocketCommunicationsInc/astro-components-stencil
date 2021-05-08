import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/repeat.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-repeat',
  shadow: false,
})
export class RuxIconRepeat {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#repeat`}></use>
      </svg>
    );
  }
}
