import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/description.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-description',
  shadow: false,
})
export class RuxIconDescription {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#description`}></use>
      </svg>
    );
  }
}
