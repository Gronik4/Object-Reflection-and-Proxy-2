export default function versionAttack({ special = [] }, nameA) {
  const res = special.find((item) => item.name === nameA);
  if(!('description' in res)) { res.description = 'Описание пока еще недоступно'; }
  const result = [];
  for(const key in res) {
    result.push({ [key]: res[key] });
  }
  return result;
}
