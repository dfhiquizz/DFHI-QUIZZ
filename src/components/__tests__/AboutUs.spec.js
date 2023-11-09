import {describe, it, expect} from 'vitest'
import AboutUs from  '../../components/AboutUs.vue'
import {mount} from '@vue/test-utils'

describe('test AboutUs', () => {
    const wrapper = mount(AboutUs);
    it('should render Classes correctly', () => {
        expect(wrapper.find('.container-about-us').exists()).toBe(true);
        expect(wrapper.find('.homeIcon').exists()).toBe(true);
        expect(wrapper.find('.text-about-us').exists()).toBe(true);
    })

    it('should render h1 and h2 correctly', () => {
        
        expect(wrapper.find("h1").text()).toBe('Über uns');
        expect(wrapper.find("h2").text()).toBe('Viel spaß beim Spielen .');
     })
})