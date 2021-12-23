import React from 'react'
import { mount } from '@cypress/react'
import GlassCard from './GlassCard'

describe('', () => {
  it('is visible', () => {
    mount(<GlassCard />)
    cy.get('div').should('not.be.null')
  })
})
