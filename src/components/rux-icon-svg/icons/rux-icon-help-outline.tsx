import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/help-outline.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-help-outline',
  shadow: false,
})
export class RuxIconHelpOutline {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#help-outline`}></use>
      </svg>
    );
  }
}
