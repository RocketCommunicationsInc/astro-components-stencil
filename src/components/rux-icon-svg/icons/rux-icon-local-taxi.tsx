import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-taxi.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-taxi',
  shadow: false,
})
export class RuxIconLocalTaxi {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-taxi`}></use>
      </svg>
    );
  }
}
