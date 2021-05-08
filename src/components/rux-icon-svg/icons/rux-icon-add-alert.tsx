import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/add-alert.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-add-alert',
  shadow: false,
})
export class RuxIconAddAlert {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#add-alert`}></use>
      </svg>
    );
  }
}
