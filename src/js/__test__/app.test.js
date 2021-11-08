import versionAttack from '../app';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [{
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон',
  },
  {
    id: 9,
    name: 'Нокаутирующий удар',
    icon: 'http://...',
  },
  ],
};
const nameAttack = ['Двойной выстрел', 'Нокаутирующий удар'];
const expected1 = [{ id: 8 }, { name: 'Двойной выстрел' }, { icon: 'http://...' }, { description: 'Двойной выстрел наносит двойной урон' }];
const expected2 = [{ id: 9 }, { name: 'Нокаутирующий удар' }, { icon: 'http://...' }, { description: 'Описание пока еще недоступно' }];
const expected3 = [{ id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон' }, 
{ id: 9, name: 'Нокаутирующий удар', icon: 'http://...' }];

test('Test special', () =>{
  const result = character.special;
  expect(result).toEqual(expected3);
})

test('Test versionAttack(Double)', () => {
  const result = versionAttack(character, nameAttack[0])[1];
  expect(result).toEqual(expected1);
});

test('Test versionAttack(Knockout)', () => {
  const result = versionAttack(character, nameAttack[1])[1];
  expect(result).toEqual(expected2);
});
