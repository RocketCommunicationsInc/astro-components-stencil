import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/apps.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-apps',
  shadow: false,
})
export class RuxIconApps {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#apps`}></use>
      </svg>
    );
  }
}
