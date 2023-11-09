import {describe, it, expect} from 'vitest'
import CopyrightDfhi from '../../components/CopyrightDfhi.vue'
import {mount} from '@vue/test-utils'


describe('test AboutUs', () => {
    const wrapper = mount(CopyrightDfhi)
    it('should render Classes correctly', () => {
     expect(wrapper.find('.container-data-privacy').exists()).toBe(true);
     expect(wrapper.find('.homeIcon').exists()).toBe(true);
     expect(wrapper.find('.infoDataPrivacy').exists()).toBe(true);
     expect(wrapper.find('.ContactPrivacy').exists()).toBe(true);
     expect(wrapper.find('.FooterContactPrivacy').exists()).toBe(true);
    })

    it('should rende p correctly', () => {
          // expect(wrapper.find("p").text()).toBe('Ich bin Aboubacar Camara, Student am DFHI-ISFATES. Im Rahmen meiner Bachelorarbeit habe ich mich entschlossen, eine DFHI-Quiz-App zu entwickeln, mit der man seine verschiedenen Vorlesungen von 6. Semester spielerisch wiederholen kann. Wer möchte, kann diese Gelegenheit nutzen, um seine Prüfungen zu bestehen.');
        
     })
})