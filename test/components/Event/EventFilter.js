import React from 'react';
import { shallow } from 'enzyme';
import EventFilter from '../../../src/js/components/Event/EventFilter';

it('should work', () => {
  const wrapper = shallow(<EventFilter />);
  console.log(wrapper);
});
