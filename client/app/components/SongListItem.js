import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class SongListItem extends Component {
    onSongDelete = () => {
      // No bind needed since we can compose 
      // the relevant data for this item here
      this.props.onClick(this.props.song.id);
    }
    render() {
      console.log(' props in item', this.props);
      const { title, id } = this.props.song;
      const { match } = this.props;
      return (
        <li id={`songItem-${id}`} className="collection-item">
          <Link to={`${match.url}songs/${id}`}>{title}</Link>
          <button className=" waves-effect waves-light btn" onClick={this.onSongDelete}>
            <i className="material-icons">close</i>
          </button>
        </li>
      );
    }
}

export default withRouter(SongListItem);
