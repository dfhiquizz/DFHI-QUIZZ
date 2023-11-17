import {describe, it, expect} from 'vitest'
import Kontakt from  '../KontaktUs.vue'

import {mount} from '@vue/test-utils'

describe('test Kontakt', () => {
    
    expect(Kontakt).toBeTruthy();
    const wrapper = mount(Kontakt);
    const img = wrapper.find('img')
    
    it('should render Classes correctly', () => {
        expect(wrapper.find('.container-contact').exists()).toBe(true);
        expect(wrapper.find('.homeIcon').exists()).toBe(true);
      
    })

    it('should render Tags correctly', () => {
        expect(img.exists()).toBe(true);
        expect(wrapper.find("h1").exists()).toBe(true);
        expect(wrapper.find('h5').exists()).toBe(true);
        expect(wrapper.find("form").exists()).toBe(true);
    })
     it('should render links  correctly', () => {
        expect(img.element.src).toBe("/src/assets/home.svg");
        expect(wrapper.find('router-link[to="/AllQuiz"]').exists()).toBe(true);   

     
     })
})