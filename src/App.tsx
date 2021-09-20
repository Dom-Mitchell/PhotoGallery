import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { CategoryList } from './components/CategoryList'
import { PhotoDetail } from './components/PhotoDetail'
import { PhotoList } from './components/PhotoList'

export function App() {
  return (
    <div>
      <main>
        <header>
          <div className="body">
            <div className="header-container">
              <Link to="/">
                <h1>My Favorite Things</h1>
              </Link>
              <h2>A Photo Gallery by Dom Mitchell</h2>
            </div>
          </div>
        </header>
        <section className="section">
          <div className="container">
            <div className="panes mobile-panes">
              <Switch>
                <Route exact path="/">
                  <CategoryList />
                </Route>
                <Route exact path="/:things">
                  <PhotoList />
                </Route>
                <Route exact path="/:things/:photoIndex">
                  <PhotoDetail />
                </Route>
              </Switch>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
