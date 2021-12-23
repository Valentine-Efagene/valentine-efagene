import React from 'react'
import { mount } from '@cypress/react'
import Social from './Social'

describe('', () => {
  it('is visible', () => {
    mount(<Social />)
    cy.get('div').should('not.be.null')
  })
})
