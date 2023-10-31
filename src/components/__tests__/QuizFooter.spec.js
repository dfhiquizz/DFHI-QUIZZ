import {describe, it, expect} from 'vitest'
import QuizFooter from  '../../components/QuizFooter.vue'
import {mount} from '@vue/test-utils'



describe('test QuizFooter', () => {
    expect(QuizFooter).toBeTruthy();
    const wrapper = mount(QuizFooter)
    it('should render correctly', () => {
        expect(wrapper.html()).toContain("Über uns")
        expect(wrapper.html()).toContain("Github")
        expect(wrapper.html()).toContain("Datenschutz")
        expect(wrapper.html()).toContain("Kontakt")
        expect(wrapper.html()).toContain("Folgen Sie uns")
        
        
        
    })

    it('create functional social media links',() =>{
        expect(wrapper.find('a[href="https://www.facebook.com/"][target="_blank"][ aria-label="Besuchen Sie uns auf Facebook "]').exists()).toBe(true)
        expect(wrapper.find('a[href="https://www.linkedin.com/"][target="_blank"][aria-label= "Besuchen Sie uns auf Linkedin"]').exists()).toBe(true)
        expect(wrapper.find('a[href="https://www.twitter.com/"][target="_blank"][aria-label= "Besuchen Sie uns auf Twitter"]').exists()).toBe(true)
       
    })

    it('create classes',() =>{
        const copyrightMessage = "Copyright © 2023 DFHI-Quizz . Alle Rechte vorbehalten. Dieses Material ist nur für den Bildungsgebrauch bestimmt, sofern nicht anders angegeben.";
        const socialMediaMessage = "Folgen Sie uns";
        expect(wrapper.find('.active').exists()).toBe(true);
        expect(wrapper.find('.socialMedia').exists()).toBe(true);
        expect(wrapper.find('.row').exists()).toBe(true);
        expect(wrapper.find('.horizontal-line').exists()).toBe(true);

        expect(wrapper.find('.copyright').text()).toContain(copyrightMessage);
        
        expect(wrapper.find("p").text()).toBe(socialMediaMessage);
    })



  
})