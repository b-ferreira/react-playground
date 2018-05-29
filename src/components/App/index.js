import React, { Component } from 'react'
import { Route } from 'react-router'
import FeaturedPlaylists from '@/containers/FeaturedPlaylists'

class App extends Component {
  render() {
    return (
      <section className="App">
        <header className="App__header flex flex-vertical pd-20 bg--spotify">
          <h1 className="f2 fc--main mg-10">
            Welcome to Spotifood!
          </h1>
          <h4 className="f4 fc--main mg-10">
            Enjoy Spotify's Featured Playlists.
          </h4>
        </header>

        <section className="App__Content flex flex-horizontal ">
          <Route exact path="/" component={FeaturedPlaylists} />
        </section>
      </section>
    )
  }
}

export default App
