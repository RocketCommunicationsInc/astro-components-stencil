import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/border-vertical.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-border-vertical',
  shadow: false,
})
export class RuxIconBorderVertical {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#border-vertical`}></use>
      </svg>
    );
  }
}
