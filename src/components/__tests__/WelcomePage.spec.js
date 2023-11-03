import {describe, it, expect} from 'vitest'
import WelcomePage from  '../../components/WelcomePage.vue'
import {mount} from '@vue/test-utils'



describe('test WelcomePage', () => {
    expect(WelcomePage).toBeTruthy();
    const wrapper = mount(WelcomePage)
    const button = wrapper.get('button');
    it('should render logo and Button  correctly', () => {
        
        const img = wrapper.find('img')
        expect(img.exists()).toBe(true);
        expect(button.exists()).toBe(true);       
        expect(button.text()).toContain("Start Quiz")
        button.trigger('click')
        
       
    })
    it('should render the number of spans correctly', () => {
        
        const span = wrapper.find('span')
        expect((span).html()).toHaveLength(128)     
        
       
    })
   
    it('should render link AllQuiz correctly', () => {
        
          
        
    expect(wrapper.find('a[href="/AllQuiz"]').exists()).toBe(true)
        
       
    })
   
  
  
})