import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/minimize.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-minimize',
  shadow: false,
})
export class RuxIconMinimize {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#minimize`}></use>
      </svg>
    );
  }
}
