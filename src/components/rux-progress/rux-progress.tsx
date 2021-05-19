import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'rux-progress',
  styleUrl: 'rux-progress.scss',
  shadow: true,
})
export class RuxProgress {
@Prop() max: number = 100;
@Prop() value: number;
@Prop() hideLabel: boolean = false;

getProgressAsString(){
  //? Would we want the condition to be >= 100? Just in case someone uses this for a weird/specific value
  return this.max === 100 ? `${this.value}%` : `${this.value}/${this.max}`
}
  render() {
    return (
      <Host>
       {
         this.value ? (
        [
         <progress class="rux-progress" value={this.value} max={this.max}></progress>,
         <output class="rux-progress__value" hidden={this.hideLabel} >{this.getProgressAsString()}</output>
        ]
         )
         
         : <progress class="rux-progress"></progress>
       }
        

        <slot></slot>
      </Host>
    );
  }

}

