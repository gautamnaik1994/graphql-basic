import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import LyricListItem from './LyricListItem';


class LyricList extends Component {
  constructor(props) {
    super(props);
  }
  onLike = (id, likes) => {
    console.log('this.props', this.props);
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1
        }

      }
    });
  }
  renderLyrics() {
    // console.log('Lyric list props ', this.props);
    return this.props.lyrics.map(lyric => (
      <LyricListItem key={lyric.id} lyric={lyric} onClick={this.onLike} />
    ));
  }
  render() {
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    );
  }
}

const mutation = gql` 
  mutation LikeLyric($id: ID) {
  likeLyric(id: $id) {
    id
    likes    
  }
}
`;

export default graphql(mutation)(LyricList);
