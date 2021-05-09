import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/switch-camera.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-switch-camera',
  shadow: false,
})
export class RuxIconSwitchCamera {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#switch-camera`}></use>
      </svg>
    );
  }
}
