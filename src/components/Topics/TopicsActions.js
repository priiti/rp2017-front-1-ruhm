import * as types from './../../constants/ActionTypes'
import Api from './../../utils/Api'

export const getTopics = () => (dispatch) => {
  return Api('GET', '/topics', {})
  .then((results) => {
    const { topics } = results
    dispatch({ type: types.TOPICS_LOADED, topics })
  })
  .catch((error) => {
    console.error(error)
  })
}

export const saveTopic = (name) => (dispatch) => {
  return Api('POST', '/topics', {
    data: { name }
  })
  .then((results) => {
    const { topic } = results
    const msg = 'Successfully saved topic ' + topic.name
    dispatch({ type: types.TOPIC_SAVED, msg})
  })
  .catch((error) => {
    dispatch({ type: types.TOPIC_SAVED, error})
  })
}