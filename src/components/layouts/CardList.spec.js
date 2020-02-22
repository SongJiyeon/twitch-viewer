import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

const props = {
  title: 'Top Games',
  cards: [{ id: 1 }, { id: 2 }],
  onClick: jest.fn(),
  setCardTitle: jest.fn(() => {
    return 'CARD TITLE';
  }),
  setCardImgUrl: jest.fn(() => {
    return 'URL';
  })
};

const setup = (title, onClick) => {

  const component = shallow(
  <CardList
    title={title}
    cards={[{ id: 1 }, { id: 2 }]}
    onClick={() => onClick('card')}
  />
  );

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
    const { title } = setup('Top Games');
    const TEXT = 'Top Games';
    expect(title.text()).toMatch(TEXT);
  });

  it('should run function when card is clicked', () => {
    const onClick = jest.fn();
    const { card } = setup(onClick);
    card.first().simulate('click');
    expect(onClick.mock.calls.length).toBe(1);
  });
});
