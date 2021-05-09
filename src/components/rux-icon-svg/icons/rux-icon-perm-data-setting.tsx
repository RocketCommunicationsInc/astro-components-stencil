import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/perm-data-setting.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-perm-data-setting',
  shadow: false,
})
export class RuxIconPermDataSetting {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#perm-data-setting`}></use>
      </svg>
    );
  }
}
