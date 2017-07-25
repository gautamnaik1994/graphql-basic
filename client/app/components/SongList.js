import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import query from '../queries/fetchSongs';

import SongListItem from './SongListItem';

class SongList extends Component {
  constructor(props) {
    super(props);
  }

  onSongDelete = (id) => {
    const item = document.querySelector(`#songItem-${id}`);
    this.props.mutate({ variables: { id } })
      .then(() => {
        //  var refresh = this.refresh();
        item.classList.add('slideleft');

        setTimeout(() => {
          console.log('Deleted');
          this.refresh();
        }, 300);
      });
  }
  renderSongs() {
    return this.props.data.songs.map(song => (
      <SongListItem key={song.id} song={song} onClick={this.onSongDelete} />
    ));
  }
  refresh() {
    this.props.data.refetch();
  }
  render() {
    const { match } = this.props;
    console.log('%cProps ', 'font-size:20px', this.props);
    if (this.props.data.loading) {
      return (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      );
    }
    return (
      <div>
        <ul className="collection with-header">
          <li className="collection-header"><h4>Songs</h4></li>
          {this.renderSongs()}
        </ul>
        {/* <button onClick={this.refresh.bind(this)}>Refresh</button>*/}
        <div className="fixed-action-btn">
          <Link className="btn-floating btn-large waves-effect waves-light red" to={`${match.url}songs/new`}><i className="material-icons">add</i></Link>
        </div>

      </div>
    );
  }
}

// const query = gql` 
//     {
//         songs {
//             id
//             title
//         }
//     }
// `;

const mutation = gql`
mutation DeleteSong($id:ID){
    deleteSong(id:$id){
        id
    }
}
`;

export default graphql(mutation)(
  graphql(query)(SongList),
);
