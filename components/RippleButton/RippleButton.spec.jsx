import React from 'react'
import { mount } from '@cypress/react'
import RippleButton from './RippleButton'

it('is visible', () => {
  mount(
    <div className="lightMode">
      <RippleButton
        onClick={() => {
          console.log('clicked ripple button')
        }}
      >
        Hover me
      </RippleButton>
    </div>
  )
  cy.get('button').should('not.be.null')
})
