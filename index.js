'use strict'

import Vue from 'vue'
import HTML from 'vue-html'

Vue.use(HTML)

new Vue({
  el: '#app',
  data: {
    name: 'Carlos'
  },
  methods: {
    changeName () {
      this.name = 'VueHTML'
    }
  },
  render (html) {
    return html`
      <div>
        <span>Hello ${this.name}</span>
        <br/>
        <button onClick=${this.changeName}>Change Name</button>
      </div>
    `
  }
})