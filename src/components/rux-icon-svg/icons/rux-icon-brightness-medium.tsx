import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/brightness-medium.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-brightness-medium',
  shadow: false,
})
export class RuxIconBrightnessMedium {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#brightness-medium`}></use>
      </svg>
    );
  }
}
