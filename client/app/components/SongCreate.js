import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import query from '../queries/fetchSongs';

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.nameInput.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables: {
        title: this.state.title,
      },
      refetchQueries: [{ query }],
    }).then((res) => {
      console.log('dataaa', res);
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <div>
        <div className="mclearfix">
          <h3 className="header left">Add Song</h3>
          <Link className="right waves-effect waves-light btn" to="/">Back</Link>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="input-field col s6">

            <input type="text" className="" onChange={event => this.setState({ title: event.target.value })} value={this.state.title} ref={(input) => { this.nameInput = input; }} />
            <label>Song Name </label>
          </div>
        </form>
      </div>
    );
  }
}
const mutation = gql`
   mutation AddSong($title:String) {
    addSong(title:$title){
        id
        title
    }
}
`;

export default graphql(mutation)(SongCreate);
