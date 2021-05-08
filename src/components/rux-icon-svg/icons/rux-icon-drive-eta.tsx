import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/drive-eta.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-drive-eta',
  shadow: false,
})
export class RuxIconDriveEta {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#drive-eta`}></use>
      </svg>
    );
  }
}
