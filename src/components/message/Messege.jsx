import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
   static propTypes = {
       text: PropTypes.object.isRequired,
   };

   render() {
       return <div>
           <p><strong>{ this.props.text.name }: </strong> { this.props.text.text }</p>
           </div>
   }
}
