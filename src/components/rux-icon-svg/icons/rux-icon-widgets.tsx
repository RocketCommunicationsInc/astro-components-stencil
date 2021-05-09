import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/widgets.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-widgets',
  shadow: false,
})
export class RuxIconWidgets {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#widgets`}></use>
      </svg>
    );
  }
}
