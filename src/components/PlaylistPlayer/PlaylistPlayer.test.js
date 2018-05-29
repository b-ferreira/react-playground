import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import PlaylistPlayer from './index'

const uriMock = 'spotify:user:spotify:playlist:37i9dQZF1DWYtKpmml7moA'

it('renders correctly', () => {
  const tree = renderer
    .create(<PlaylistPlayer uri={uriMock} />)
    .toJSON()
    expect(tree).toMatchSnapshot()
})

it('renders correctly without uri', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <PlaylistPlayer />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <PlaylistPlayer uri={uriMock} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
