import {type SchemaTypeDefinition} from 'sanity'

import bandInfo from './schemas/bandInfo'
import photo from './schemas/photo'
import show from './schemas/show'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [bandInfo, photo, show],
}
