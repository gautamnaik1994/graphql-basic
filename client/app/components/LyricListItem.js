import React, { Component } from 'react';

class LyricListItem extends Component {
    onLyricLike = () => {
      // No bind needed since we can compose 
      // the relevant data for this item here
      this.props.onClick(this.props.lyric.id,this.props.lyric.likes);
    }
    render() {
      console.log(' props in lyric item', this.props);
      const { content, id, likes } = this.props.lyric;
      return (
        <li id={id} className="collection-item">
         {content}
         <button className=" waves-effect waves-light btn" onClick={this.onLyricLike}>
           <span>{likes} </span>  
         <i className="material-icons">thumb_up</i>
          </button>
        </li>
      );
    }
}

export default LyricListItem;
