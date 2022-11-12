import React from 'react'

function Search (props) {

    return(
    <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(event) => props.setQueried(event.target.value)}
            value={props.queried}
            onKeyPress={props.search}
          />
        </div>
    )
}

export default Search