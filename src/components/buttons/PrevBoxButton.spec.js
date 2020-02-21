import React from 'react';
import { shallow } from 'enzyme';
import PrevBoxButton from './PrevBoxButton';

const onClick = jest.fn();

describe('Prev Button Components', () => {
  it('should call function when clicked', () => {
    const component = shallow(<PrevBoxButton onClick={onClick} />);
    const button = component.find('button');
    button.simulate('click');
    expect(onClick.mock.calls.length).toBe(1);
  });
});
