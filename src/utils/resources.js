import {
  DATASETS,
  ARTIFACTS,
  FEATURE_SETS_TAB,
  FEATURE_VECTORS_TAB,
  MODELS_TAB
} from '../constants'
import { isNil } from 'lodash'

export const generateUri = (item, tab) => {
  let uri = `store://${tab}/${item.project}/`

  if (tab === MODELS_TAB || tab === DATASETS || tab === ARTIFACTS) {
    uri += item.db_key
    uri += getArtifactReference(item)
  } else if (tab === FEATURE_SETS_TAB || tab === FEATURE_VECTORS_TAB) {
    uri += item.name
    uri += getFeatureReference(item)
  }

  return uri
}

export const getArtifactReference = item => {
  let reference = `#${item.iter || 0}`

  if (!isNil(item.tag)) {
    reference += `:${item.tag}`
  } else if (!isNil(item.tree)) {
    reference += `@${item.tree}`
  } else {
    reference += ':latest'
  }

  return reference
}

export const getFeatureReference = item => {
  let reference = ''

  if (item.tag) reference += `:${item.tag}`
  else if (item.uid) reference += `@${item.uid}`

  return reference
}

export const getParsedResource = resource => {
  let parsedResource = ['', '']

  if (resource) {
    const match = resource.match(/([^:#@]+)([:#@]?.+)?/)
    if (match) parsedResource = [match[1] ?? '', match[2] ?? '']
  }

  return parsedResource
}
