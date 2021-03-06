import React from 'react'

import { Control } from 'react-redux-form'
import { Row, Col, Input } from 'reactstrap'

import { CollapsingOptions } from './BaseOptions'
import { ExtraOptions } from './Input'

export default ({ rowIndex }) =>
  <>
    <Row form>
      <Col>
        <Control
          model=".label"
          placeholder="Question"
          component={ Input }
          debounce={ 300 }
        />
      </Col>
    </Row>
    <CollapsingOptions
      rowIndex={ rowIndex }
      borderTop={ false }
    >
      <div className="mt-2">
        <ExtraOptions type="number" />
      </div>
    </CollapsingOptions>
  </>
