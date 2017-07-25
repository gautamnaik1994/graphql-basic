import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
         console.log('%cProps ', 'font-size:20px', this.props);
    }
    state = { content: '' };

    change = ev => this.setState({ content: ev.target.value });

    onSubmit(e) {
      e.preventDefault();
      this.props.mutate({
        variables: {
          content:this.state.content,
          songId:this.props.songId,
        }
      }).then(() => {
        this.setState({content:''});
      })
    }

    render() {
      return (
        <form onSubmit={this.onSubmit.bind(this)} className="input-field col s6">
          <input type="text" className="validate" value={this.state.content} onChange={event=>this.setState({content:event.target.value})} />
          <label className="">Add a lyric</label>
        </form>
      );
    }
}
const mutation = gql`
mutation addLyricToSong($content:String, $songId:ID){
    addLyricToSong(content:$content,songId:$songId){
    id,
    lyrics{
      id
      content
      likes
    }
  }
}
`;

export default graphql(mutation)(LyricCreate);
