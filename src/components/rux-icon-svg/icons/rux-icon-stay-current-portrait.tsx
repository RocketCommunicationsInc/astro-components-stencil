import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/stay-current-portrait.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-stay-current-portrait',
  shadow: false,
})
export class RuxIconStayCurrentPortrait {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#stay-current-portrait`}></use>
      </svg>
    );
  }
}
