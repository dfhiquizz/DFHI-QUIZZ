import {describe, it, expect} from 'vitest'
import DfhiQuizzes from  '../../webpage/DfhiQuizzes.vue'
import DfhiLecture from  '../../components/DfhiLecture.vue'
import {mount} from '@vue/test-utils'

describe('test AboutUs', () => {
    expect(DfhiQuizzes).toBeTruthy();
    const wrapper = mount(DfhiQuizzes);
    
    it('should render Classes correctly', () => {
        expect(wrapper.find('.ChoicesSubjects').exists()).toBe(true);
       
    })

    it('should render childcomponent correctly', () => {
        
      
    const childComponent = wrapper.findComponent(DfhiLecture);

    expect(childComponent.exists()).toBe(true);

    expect(childComponent.text()).toContain('Betriebssystem4 Fragen');     })
})