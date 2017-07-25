import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (this.props.data.loading) {
      return (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      );
    }
    return (
      <div>
        <div className="mclearfix">
          <h3 className="left">{song.title}</h3>
          <Link className="right waves-effect waves-light btn" to="/" >Back</Link>
        </div>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.match.params.id} />
      </div>

    );
  }
}

const query = gql`
query SongQuery($id:ID!){
    song(id:$id){
        id
        title
        lyrics {
          id
          content
          likes
        }
    }
}
`;

export default graphql(query, {
  options: props => ({ variables: { id: props.match.params.id } }),
})(SongDetail);
