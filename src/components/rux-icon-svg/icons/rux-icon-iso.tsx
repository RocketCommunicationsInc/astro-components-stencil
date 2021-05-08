import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/iso.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-iso',
  shadow: false,
})
export class RuxIconIso {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#iso`}></use>
      </svg>
    );
  }
}
