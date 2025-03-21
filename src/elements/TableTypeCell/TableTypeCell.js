import React from 'react'
import PropTypes from 'prop-types'

import { Tooltip, TextTooltipTemplate } from 'igz-controls/components'

import { ReactComponent as Code } from 'igz-controls/images/code.svg'
import { ReactComponent as Horovod } from 'igz-controls/images/horovod.svg'
import { ReactComponent as Jupyter } from 'igz-controls/images/jupyter.svg'
import { ReactComponent as Nuclio } from 'igz-controls/images/nuclio.svg'
import { ReactComponent as Package } from 'igz-controls/images/package.svg'
import { ReactComponent as Remote } from 'igz-controls/images/ic_remote.svg'
import { ReactComponent as Spark } from 'igz-controls/images/spark.svg'
import { ReactComponent as Workflow } from 'igz-controls/images/workflow-icon.svg'

const TableTypeCell = ({ data }) => {
  const typesOfJob = {
    '': { label: 'Local', icon: <Code /> },
    dask: { label: 'Dask', icon: null },
    handler: { label: 'Handler', icon: <Jupyter /> },
    job: { label: 'Job', icon: <Package /> },
    local: { label: 'Local', icon: <Code /> },
    mpijob: { label: 'Horovod', icon: <Horovod /> },
    nuclio: { label: 'Nuclio', icon: <Nuclio /> },
    remote: { label: 'Remote', icon: <Remote /> },
    spark: { label: 'Spark', icon: <Spark /> },
    workflow: { label: 'Workflow', icon: <Workflow /> }
  }

  return (
    <div className={`table-body__cell ${data.class}`}>
      <Tooltip
        className="table-body__cell_type"
        template={
          <TextTooltipTemplate
            text={typesOfJob[data.value]?.label ?? data.value}
          />
        }
      >
        {typesOfJob[data.value]?.icon ?? data.value}
      </Tooltip>
    </div>
  )
}

TableTypeCell.propTypes = {
  data: PropTypes.shape({}).isRequired
}

export default TableTypeCell
