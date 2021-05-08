import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/border-clear.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-border-clear',
  shadow: false,
})
export class RuxIconBorderClear {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#border-clear`}></use>
      </svg>
    );
  }
}
