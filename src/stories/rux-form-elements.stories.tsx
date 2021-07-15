import { html, render } from 'lit-html'

import readme from '../../src/components/rux-input/readme.md'

export default {
    title: 'Components/Form Elements',
}

export const InputFields = () => html`
    <style>
      ul {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        column-gap: 3rem;
        align-items: start;
        margin: 4rem 0;
        padding: 0;
        width: 100%;
        row-gap: 1rem;
      }
      li {
        list-style: none;
      }
      .text-area-field {
        height: 87px;
      }
      textarea {
        min-height: 4.25rem;
      }
      @media screen and (min-width: 550px){
        ul {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media screen and (min-width: 800px){
        ul {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    </style>
    <div style="padding: 10vh 5vw; display: flex; flex-flow: column; justify-content: center;">
      <ul class="rux-form">
        <li>
          <rux-input placeholder="Text input" label="Text input"></rux-input>
        </li>
        <li>
          <rux-input placeholder="Number Input" label="Number input" type="number></rux-input>
        </li>
        <li>
          <rux-input placeholder="Text input" label="Text input"></rux-input>
        </li>
        <li>
          <rux-input placeholder="Text input" label="Text input" help-text="Help text"></rux-input>
        </li>
        <li>
          <rux-input placeholder="Text input" label="Text input" help-text="Help text"></rux-input>
        </li>
        <li>
          <rux-input value=" " label="Is Required" required></rux-input>
        </li>
        <li>
          <rux-input label="Invalid" error-text="Error text" invalid="true"></rux-input>
        </li>
        <li class="rux-form-field">
          <rux-input label="Disabled" disabled></rux-input>
        </li>
        <li class="rux-form-field">
          <rux-input label="Password" type="password" placeholder="********"></rux-input>
        </li>
        <li class="rux-form-field">
          <rux-input label="Invalid password" error-text="Error text" type="password" invalid placeholder="********"></rux-input>
        </li>
        <li>
          <rux-input label="Web address" type="url" placeholder="https://domain.com"></rux-input>
        </li>
        <li class="rux-form-field">
          <rux-input type="email" label="Email address" placeholder="user@domain.com"></rux-input>
        </li>
        <li class="rux-form-field">
          <rux-input type="tel" placeholder="(999) 999-9999" label="Phone number"></rux-input>
        </li>
        <li class="rux-form-field">
          <rux-input label="Search" type="search" placeholder="Enter search term"></rux-input>
        </li>
        <li class="rux-form-field">
          <rux-input label="Invalid search" type="search" invalid placeholder="Enter search term" error-text="Error text" required>
        </li>
        <li class="rux-form-field">
          <rux-input label="Number input" type="number" min="0" max="10" placeholder="Enter a number between 0 and 10"></rux-input>
        </li>
        <li class="rux-form-field">
          <rux-input label="Invalid number" type="number" min="0" max="10" invalid error-text="Error text" placeholder="Enter a number between 0 and 10"></rux-input>
        </li>
        <li class="text-area-field">
          <label for="input__textarea">Textarea</label>
          <textarea
            id="input__textarea"
            class="rux-input"
            placeholder="Multiline text is ok"
          ></textarea>
        </li>
        <!-- Styles for these HTML5 input types still need to be implemented
    <li class="rux-form-field">
      <label for="input__color">Color input</label>
      <input class="rux-input" type="color" id="input__color" value="#000000">
    </li>
    <li class="rux-form-field">
      <label for="input__range">Range input</label>
      <input class="rux-input" type="range" id="input__range" value="10">
    </li>
    <li class="rux-form-field">
      <label for="input__date">Date input</label>
      <input class="rux-input" type="date" id="input__date" value="1970-01-01">
    </li>
    <li class="rux-form-field">
      <label for="input__month">Month input</label>
      <input class="rux-input" type="month" id="input__month" value="1970-01">
    </li>
    <li class="rux-form-field">
      <label for="input__week">Week input</label>
      <input class="rux-input" type="week" id="input__week" value="1970-W01">
    </li>
    <li class="rux-form-field">
      <label for="input__datetime">Datetime input</label>
      <input class="rux-input" type="datetime" id="input__datetime" value="1970-01-01T00:00:00Z">
    </li>
    <li class="rux-form-field">
      <label for="input__datetime-local">Datetime-local input</label>
      <input class="rux-input" type="datetime-local" id="input__datetime-local" value="1970-01-01T00:00">
    </li>
    <li class="rux-form-field">
      <div class="rux-button-group">
        <input class="rux-button" type="submit" value="input type=submit">
      </div>
    </li>
    <li class="rux-form-field">
      <div class="rux-button-group">
       <input class="rux-button" type="button" value="input type=button">
      </div>
    </li>
    <li class="rux-form-field">
      <div class="rux-button-group">
        <input class="rux-button" type="reset" value="input type=reset">
      </div>
    </li>
    <li class="rux-form-field">
      <div class="rux-button-group">
       <input class="rux-button" type="submit" value="input disabled" disabled>
      </div>
    </li> -->
      </ul>
      <ul class="rux-form">
        <li class="rux-form-field rux-form-field--small">
          <rux-input label="Smaller text input" placeholder="Text input" small></rux-input>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input label="Smaller number input" type="number" placeholder="Number Input" small></rux-input>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input label="Smaller Is Required" required small></rux-input>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input label="Smaller invalid" invalid error-text="Error text" small></rux-input>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input label="Smaller disabled" disabled small></rux-input>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input label="Smaller password" type="password" placeholder="********" small></rux-input>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input label="Smaller web address" type="url" placeholder="https://domain.com" small></rux-input>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input label="Smaller email address" placeholder="user@domain.com" type="email" small></rux-input>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input label="Smaller phone number" type="tel" placeholder="(999) 999-9999" small></rux-input>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input label="Smaller search" type="search" placeholder="Enter search term" small></rux-input>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <rux-input label="Smaller number input" type="number" min="0" max="10" placeholder="Enter a number between 0 and 10" small></rux-input>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <label for="input__textarea-smaller">Smaller textarea</label>
          <textarea
            id="input__textarea-smaller"
            class="rux-input"
            placeholder="Multiline text is ok"
          ></textarea>
        </li>
      </ul>
    </div>
  `

InputFields.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: readme,
        },
    },
}
