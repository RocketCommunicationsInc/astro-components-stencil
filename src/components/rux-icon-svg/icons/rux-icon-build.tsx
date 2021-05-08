import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/build.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-build',
  shadow: false,
})
export class RuxIconBuild {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#build`}></use>
      </svg>
    );
  }
}
