import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { GMAP_API_KEY } from '../utils/constants'

const mapStyle = {
  width: '672px',
  height: '300px',
}

class GtaMap extends Component {
  render() {
    const { initialCenter } = this.props
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Map
          google={this.props.google}
          style={mapStyle}
          initialCenter={initialCenter}
          zoom={8}
        />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: GMAP_API_KEY,
})(GtaMap)
