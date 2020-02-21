import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

const setup = () => {
  const MockChildren = () => {
    return (
      <div>
        <div>mock children</div>
      </div>
    );
  }

  const props = {
    title: 'Top Games',
    children: MockChildren(),
    cards: [{ id: 1 }, { id: 2 }],
    onClick: jest.fn(),
    setCardTitle: jest.fn(() => {
      return 'CARD TITLE';
    }),
    setCardImgUrl: jest.fn(() => {
      return 'URL';
    })
  };

  const component = shallow(<CardList props={props} />);

  return {
    component: component,
    title: component.find('.card-list-title'),
    card: component.find('.card'),
    cardTitle: component.find('.card-title'),
    img: component.find('img')
  };

}

describe('CardList Component', () => {
  it('should display title', () => {
    const { title } = setup();
    const TEXT = 'Top Games';
    expect(title.text()).toMatch(TEXT);
  });
});
