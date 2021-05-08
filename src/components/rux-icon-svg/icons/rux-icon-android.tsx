import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/android.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-android',
  shadow: false,
})
export class RuxIconAndroid {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#android`}></use>
      </svg>
    );
  }
}
