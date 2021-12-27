import React from 'react'
import { mount } from '@cypress/react'
import MyImage from './MyImage'

it('is visible', () => {
  mount(
    <MyImage src="/react.svg" alt="" layout="fixed" width={100} height={100} />
  )
  cy.get('div').should('not.be.null')
})
