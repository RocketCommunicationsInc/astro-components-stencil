import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/processor-alt.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-processor-alt',
  shadow: false,
})
export class RuxIconProcessorAlt {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#processor-alt`}></use>
      </svg>
    );
  }
}
