/*
1. Instance
2. {{}} Interpolations (https://ru.vuejs.org/v2/guide/syntax.html)
3. Expression in nterpolations({{?:}})
3. directives: 
    * v-html="'String with html value'"
    * v-bind:disabled="boolean"
    * v-bind:href="url"
    * v-model
    * v-if="boolean" - v-else-if="boolean" - v-else
    * v-show="boolean"
    * v-for - loop (Work like  for-in), (value, name, index)
4. styles directives: ( HW )
   * v-bind:class="{ 'class-name as string': Boolean, 'another-class-name': Boolean variable, .., }"
   * v-bind:class="['activeClass', errorClassAsVar]"
   * v-bind:style="{ cssPropName: activeColorAsVar, fontSize: n + 'px', matgin: '10px' }"
5. v-on:click,mousemove .. (@click)
6. $set(vm.items, indexOfItem, newValue) // (HW )
*/
// console.log(Vue, 'vue');

// -------- JQUERY


// Model----
const data = {
    app: 'Hello world',
    isMarried: true,
    a: false,
    foo: 'Valera',
    products: [
        {
            title: 'product - 1'
        },
        {
            title: 'product - 2'
        },
        {
            title: 'product - 3'
        }
    ]
};


const methods = {
    onClick() {
        console.log('click');

        this.products.push(
            {
                title: `product - ${this.products.length + 1}`
            }
        )
    }
};

// ----
var vue = new Vue({
    el: '#app',
    data,
    methods
});