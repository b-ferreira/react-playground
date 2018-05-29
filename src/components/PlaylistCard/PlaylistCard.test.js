import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import PlaylistCard from './index'

const playlistMock = {
  name: 'Awesome Playlist',
  images: [
    {
      url: 'asd'
    }
  ]
}
const selectCallback = jest.fn()

it('renders correctly', () => {
  const tree = renderer
    .create(<PlaylistCard playlist={playlistMock} onSelect={selectCallback} />)
    .toJSON()
    expect(tree).toMatchSnapshot()
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <PlaylistCard playlist={playlistMock} onSelect={selectCallback} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
