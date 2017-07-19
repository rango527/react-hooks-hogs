import React from 'react'
import PigTile from './PigTile'

class PigIndex extends React.Component{


  render() {
    const renderHogs = this.props.hogs.map(hog =>
      <PigTile
        key={hog.name}
        name={hog.name}
        specialty={hog.specialty}
        hideHog={this.props.hideHog}
        greased={hog.greased}
        medal={hog['highest medal achieved']}
        weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
      />
        )
        return (
          <div className="indexWrapper">
            {renderHogs}
          </div>
        )

    }
  }



export default PigIndex
