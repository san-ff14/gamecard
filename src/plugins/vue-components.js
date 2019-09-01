import Vue from 'vue'

export const list = [
  'svgTemplate',
  'svgTemplate02',
  'svgTemplate03',
  'svgTemplate04',
  'svgTemplate05',
  'svgTemplate06'
]

var components = {}
list.forEach(component=>{
  components[`${component}`] = require(`../components/${component}.vue`).default
})

Vue.mixin({ components })
