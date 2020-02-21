import React from 'react';
import { shallow } from 'enzyme';
import NextBoxButton from './NextBoxButton';

const onClick = jest.fn();

describe('Next Button Components', () => {
  it('should call function when clicked', () => {
    const component = shallow(<NextBoxButton onClick={onClick} />);
    const button = component.find('button');
    button.simulate('click');
    expect(onClick.mock.calls.length).toBe(1);
  });
});
