import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/add-to-home-screen.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-add-to-home-screen',
  shadow: false,
})
export class RuxIconAddToHomeScreen {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#add-to-home-screen`}></use>
      </svg>
    );
  }
}
