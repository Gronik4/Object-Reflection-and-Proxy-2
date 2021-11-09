export default function versionAttack(character, nameA) {
  const { special } = character;
  const res = special.find((item) => item.name === nameA);
  if (!('description' in res)) { res.description = 'Описание пока еще недоступно'; }
  const result = [];
  for (const key in res) {
    result.push({ [key]: res[key] });
  }
  const result1 = [special, result];
  return result1;
}
