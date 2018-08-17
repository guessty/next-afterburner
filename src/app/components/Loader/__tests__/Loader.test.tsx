import * as React from 'react'
import * as Enzyme from 'enzyme' 
import * as renderer from 'react-test-renderer'
//
import Loader from './../index'

describe('<Loader />', () => {
  let component: any
  let componentWrapper: any

  beforeEach(() => {
    component = (
      <Loader />
    )
    componentWrapper = Enzyme.shallow(component, {})
  })

  it('should be defined', () => {
    expect(Loader).toBeDefined()
  })

  it('should render', () => {
    expect(componentWrapper.length).toEqual(1)
  })
  
  it('capturing Snapshot of Loader', () => {
    const renderedValue =  renderer.create(component).toJSON()
    expect(renderedValue).toMatchSnapshot();
  })
})

