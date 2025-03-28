import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

import NoData from '../../common/NoData/NoData'

const DetailsInputs = ({ inputs }) => {
  return (
    <div className="inputs_container">
      {isEmpty(inputs) ? (
        <NoData />
      ) : (
        <ul className="table__item_inputs">
          {Object.entries(inputs || {}).map(([key, value]) => (
            <li className="table__item_inputs_item" key={key}>
              <div>{key}</div>
              <div>{value}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

DetailsInputs.propTypes = {
  inputs: PropTypes.shape({}).isRequired
}

export default DetailsInputs
