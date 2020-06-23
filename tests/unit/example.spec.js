import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    const htmlToString = wrapper.html().toString();
    // Check if the class hello is present.
    expect(htmlToString.includes('class="hello"')).toBeTruthy();
    expect(wrapper.text()).toMatch(msg);
  });
});
