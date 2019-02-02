import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {isEmpty} from '../helpers/helper';


// Redux
import {connect} from 'react-redux';

import UButtons from './UButtons';

class Usuario extends Component {
     
  static propTypes = {
    user: PropTypes.object.isRequired,
    follower: PropTypes.string,
    following: PropTypes.string,
    followRequest: PropTypes.func,
    approveRequest: PropTypes.func,
    denyRequest: PropTypes.func
  }


     render() { 
      const defaultUser = {
        login: {
          uuid: ''
        },
        name: {
          first: '',
          last: ''
        },
        picture: {
          thumbnail: '//placehold.it/150x150',
          medium: '//placehold.it/250x250',
          large: '//placehold.it/350x350'
        }
      }
  
      const follower = this.props.follower || '';
      const following = this.props.following || '';
      const followed = this.props.followed || false;
      const followRequest = this.props.followRequest || {};
      const approveRequest = this.props.approveRequest || {};
      const denyRequest = this.props.denyRequest || {};
      const {name, picture} = (!isEmpty(this.props.user) && this.props.user) || defaultUser;

          return ( 
              
               <div className="card bg-light mb-1" style={{width:"250px"}}>
               <img className="card-img-top" srcSet={`${picture.thumbnail} 480w, ${picture.medium} 960w, ${picture.large} 1440w`} alt={`${name.first} ${name.last}`}/>
               <div className="card-body">
                 <h4 className="card-title">{name.first} {name.last}</h4>
                 <p className="card-text">Some example text.</p>
                
                 <UButtons
                follower={follower}
                following={following}
                followed={followed}
                followRequest={followRequest}
                approveRequest={approveRequest}
                denyRequest={denyRequest}
                type={this.props.type}
              />
               </div>
             </div>
           );
     }
}
 
export default connect(null, {})(Usuario);