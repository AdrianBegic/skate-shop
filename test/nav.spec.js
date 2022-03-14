import { mount } from '@vue/test-utils';
import NavBar from '../components/nav.vue'


describe('NavBar component', () => {
    describe('Default mounting properties', () => {
        it('should mount successfully', () => {
            const wrapper = mount(NavBar);

            expect(wrapper.vm._isMounted).toBeTruthy();

            expect(wrapper).toMatchSnapshot();
        });

        it('should unmount successfully', () => {
            const wrapper = mount(NavBar);

            const NavBarInstance = wrapper.vm;
            NavBarInstance.$destroy();
            expect(NavBarInstance._isDestroyed).toBeTruthy();

            expect(wrapper).toMatchSnapshot();
        });

        it('should mount links with proper paths', () => {
            const
        })
    })
})