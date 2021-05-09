import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-activity.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-activity',
  shadow: false,
})
export class RuxIconLocalActivity {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-activity`}></use>
      </svg>
    );
  }
}
