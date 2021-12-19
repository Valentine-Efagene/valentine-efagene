import React from 'react'
import { mount } from '@cypress/react'
import Home from './index'

it('is visible', () => {
  mount(<Home />)
  cy.get('div').should('not.be.null')
})
