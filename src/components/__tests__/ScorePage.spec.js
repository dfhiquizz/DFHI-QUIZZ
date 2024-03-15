import {describe, it, expect} from 'vitest'
import ScorePage from  '../../components/ScorePage.vue'
import {mount} from '@vue/test-utils'

describe('test ScorePage', () => {

    expect(ScorePage).toBeTruthy();
    const wrapper = mount(ScorePage);

    it('should render Classes correctly', () => {
        expect(wrapper.find('.container-about-us').exists()).toBe(true);
       
    })

})