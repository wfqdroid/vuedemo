import Vue from 'vue'

export const store = Vue.observable({count: 0});
export const mutation = {
    setCount(count) {
        store.count = count
    }
};

