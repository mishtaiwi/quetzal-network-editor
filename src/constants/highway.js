// this files contains all available highways and associated constant.
const highwayList = [
  'motorway',
  'motorway_link',
  'trunk',
  'trunk_link',
  'primary',
  'primary_link',
  'secondary',
  'secondary_link',
  'tertiary',
  'tertiary_link',
  'residential',
  'living_street',
  'service',
  'unclassified',
  'cycleway',
  'pedestrian',
]

const highwayColor = {
  motorway: 'E892A2',
  motorway_link: 'E892A2',
  trunk: 'E892A2',
  trunk_link: 'E892A2',
  primary: 'FCD6A4',
  primary_link: 'FCD6A4',
  secondary: 'F7F9BE',
  secondary_link: 'F7F9BE',
  tertiary: '808080',
  tertiary_link: '808080',
  residential: '808080',
  living_street: '808080',
  service: '808080',
  unclassified: '808080',
  cycleway: '1D8621',
  pedestrian: '1D8621',
}

const highwayWidth = {
  motorway: 4,
  motorway_link: 4,
  trunk: 4,
  trunk_link: 4,
  primary: 4,
  primary_link: 4,
  secondary: 3,
  secondary_link: 3,
  tertiary: 2,
  tertiary_link: 2,
  residential: 2,
  living_street: 2,
  service: 2,
  unclassified: 2,
  cycleway: 2,
  pedestrian: 2,
}

export { highwayList, highwayColor, highwayWidth }