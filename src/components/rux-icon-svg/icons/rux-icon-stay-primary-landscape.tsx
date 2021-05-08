import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/stay-primary-landscape.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-stay-primary-landscape',
  shadow: false,
})
export class RuxIconStayPrimaryLandscape {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#stay-primary-landscape`}></use>
      </svg>
    );
  }
}
