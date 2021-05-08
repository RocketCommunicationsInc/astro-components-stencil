import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/stay-primary-portrait.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-stay-primary-portrait',
  shadow: false,
})
export class RuxIconStayPrimaryPortrait {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#stay-primary-portrait`}></use>
      </svg>
    );
  }
}
