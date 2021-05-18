import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'rux-progress',
  styleUrl: 'rux-progress.scss',
  shadow: true,
})
export class RuxProgress {
@Prop() maxValue: number = 100;
@Prop() value: number;
@Prop() hideLabel: boolean = false;

getProgressAsString(){
  //? Would we want the condition to be >= 100? Just in case someone uses this for a weird/specific value
  return this.maxValue === 100 ? `${this.value}%` : `${this.value}/${this.maxValue}`
}
  render() {
    return (
      <Host>
       {
         this.value ? (
        <div>
         <progress class="rux-progress" value={this.value} max={this.maxValue}></progress>
         <output class="rux_progress__value" hidden={this.hideLabel} >{this.getProgressAsString()}</output>
         </div>
         )
         
         : <progress class="rux-progress"></progress>
       }
        

        <slot></slot>
      </Host>
    );
  }

}

/*
*This is how the old component did it 

<progress class="rux-progress" value={this.value} max={this.maxvalue}></progress>
<output class="rux_progress__value" /*need hidden class >{this.getProgressAsString()}</output>

*/