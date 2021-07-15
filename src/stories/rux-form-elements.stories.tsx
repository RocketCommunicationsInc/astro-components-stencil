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
        <li class="rux-form-field">
          <label for="input__invalid">Invalid</label>
          <input id="input__invalid" class="rux-input" type="text" required />
          <span class="rux-error-text">Error text</span>
        </li>
        <li class="rux-form-field">
          <label for="input__disabled">Disabled</label>
          <input id="input__disabled" class="rux-input" type="text" disabled />
        </li>
        <li class="rux-form-field">
          <label for="input__password">Password</label>
          <input id="input__password" class="rux-input" type="password" placeholder="********" />
        </li>
        <li class="rux-form-field">
          <label for="input__invalid">Invalid password</label>
          <input id="input__invalid" class="rux-input" type="password" required />
          <span class="rux-error-text">Error text</span>
        </li>
        <li class="rux-form-field">
          <label for="input__url">Web address</label>
          <input id="input__url" class="rux-input" type="url" placeholder="https://domain.com" />
        </li>
        <li class="rux-form-field">
          <label for="input__email">Email address</label>
          <input id="input__email" class="rux-input" type="email" placeholder="user@domain.com" />
        </li>
        <li class="rux-form-field">
          <label for="input__tel">Phone number</label>
          <input id="input__tel" class="rux-input" type="tel" placeholder="(999) 999-9999" />
        </li>
        <li class="rux-form-field">
          <label for="input__search">Search</label>
          <input
            id="input__search"
            class="rux-input"
            type="search"
            placeholder="Enter search term"
          />
        </li>
        <li class="rux-form-field">
          <label for="input__search">Invalid search</label>
          <input
            id="input__search"
            class="rux-input"
            type="search"
            required
            placeholder="Enter search term"
          />
          <span class="rux-error-text">Error text</span>
        </li>
        <li class="rux-form-field">
          <label for="input__number">Number input</label>
          <input
            id="input__number"
            class="rux-input"
            type="number"
            min="0"
            max="10"
            placeholder="Enter a number between 0 and 10"
          />
        </li>
        <li class="rux-form-field">
          <label for="input__number">Invalid number</label>
          <input
            id="input__number"
            class="rux-input"
            type="number"
            min="0"
            max="10"
            required
            placeholder="Enter a number between 0 and 10"
          />
          <span class="rux-error-text">Error text</span>
        </li>
        <li class="rux-form-field">
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
          <label for="input__text-smaller">Smaller text input</label>
          <input id="input__text-smaller" class="rux-input" type="text" placeholder="Text input" />
        </li>
        <li class="rux-form-field rux-form-field--small">
          <label for="input__number-smaller">Smaller number input</label>
          <input id="input__number-smaller" class="rux-input" type="number" placeholder="Number Input" />
        </li>
        <li class="rux-form-field rux-form-field--small">
          <label for="input__required-smaller">Smaller Is Required</label>
          <input id="input__required-smaller" class="rux-input" type="text" value=" " required />
        </li>
        <li class="rux-form-field rux-form-field--small">
          <label for="input__invalid-smaller">Smaller invalid</label>
          <input id="input__invalid-smaller" class="rux-input" type="text" required />
          <span class="rux-error-text">Error text</span>
        </li>
        <li class="rux-form-field rux-form-field--small">
          <label for="input__disabled-smaller">Smaller disabled</label>
          <input id="input__disabled-smaller" class="rux-input" type="text" disabled />
        </li>
        <li class="rux-form-field rux-form-field--small">
          <label for="input__password-smaller">Smaller password</label>
          <input
            id="input__password-smaller"
            class="rux-input"
            type="password"
            placeholder="********"
          />
        </li>
        <li class="rux-form-field rux-form-field--small">
          <label for="input__url-smaller">Smaller web address</label>
          <input
            id="input__url-smaller"
            class="rux-input"
            type="url"
            placeholder="https://domain.com"
          />
        </li>
        <li class="rux-form-field rux-form-field--small">
          <label for="input__email-smaller">Smaller email address</label>
          <input
            id="input__email-smaller"
            class="rux-input"
            type="email"
            placeholder="user@domain.com"
          />
        </li>
        <li class="rux-form-field rux-form-field--small">
          <label for="input__tel-smaller">Smaller phone number</label>
          <input
            id="input__tel-smaller"
            class="rux-input"
            type="tel"
            placeholder="(999) 999-9999"
          />
        </li>
        <li class="rux-form-field rux-form-field--small">
          <label for="input__search-smaller">Smaller search</label>
          <input
            id="input__search-smaller"
            class="rux-input"
            type="search"
            placeholder="Enter search term"
          />
        </li>
        <li class="rux-form-field rux-form-field--small">
          <label for="input__number-smaller">Smaller number input</label>
          <input
            id="input__number-smaller"
            class="rux-input"
            type="number"
            min="0"
            max="10"
            placeholder="Enter a number between 0 and 10"
          />
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
