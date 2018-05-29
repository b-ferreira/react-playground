import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import PlaylistList from './index'

const listtMock = [
  {
    name: 'Awesome Playlist',
    images: [
      {
        url: 'asd'
      }
    ]
  }
]
const onItemSelectCallback = jest.fn()

it('renders correctly', () => {
  const tree = renderer
    .create(
      <PlaylistList playlists={listtMock} onItemSelect={onItemSelectCallback} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <PlaylistList playlists={listtMock} onItemSelect={onItemSelectCallback}/>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
