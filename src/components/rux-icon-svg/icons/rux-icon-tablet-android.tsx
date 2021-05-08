import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/tablet-android.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-tablet-android',
  shadow: false,
})
export class RuxIconTabletAndroid {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#tablet-android`}></use>
      </svg>
    );
  }
}
