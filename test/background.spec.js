import { mount } from '@vue/test-utils';
import BackGround from '../components/background.vue'


describe('BackGround component', () => {
    describe('Default mounting properties', () => {
      it('should mount successfully', () => {
        const wrapper = mount(BackGround);
  
        expect(wrapper.vm._isMounted).toBeTruthy();
  
        expect(wrapper).toMatchSnapshot();
      });
  
      it('should unmount successfully', () => {
        const wrapper = mount(BackGround);
  
        const BackGroundInstance = wrapper.vm;
        BackGroundInstance.$destroy();
        expect(BackGroundInstance._isDestroyed).toBeTruthy();
  
        expect(wrapper).toMatchSnapshot();
      });
    })})