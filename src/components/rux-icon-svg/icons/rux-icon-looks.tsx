import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/looks.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-looks',
  shadow: false,
})
export class RuxIconLooks {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#looks`}></use>
      </svg>
    );
  }
}
