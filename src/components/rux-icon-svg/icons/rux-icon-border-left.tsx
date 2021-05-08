import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/border-left.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-border-left',
  shadow: false,
})
export class RuxIconBorderLeft {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#border-left`}></use>
      </svg>
    );
  }
}
