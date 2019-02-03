import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { logoutUser, getUsers, getRequests, followRequest, approveRequest, denyRequest } from '../actions/userActions';
import {isEmpty} from '../helpers/helper';
import UButtons from './UButtons';

class Requests extends Component {
  state = {
    errors: {}
  };

  componentDidMount() {
    this.props.getUsers();
    this.props.getRequests(this.props.auth.sampledata);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({
          errors: nextProps.errors
      });
    }
  }

  render() {
    const following = this.props.auth.uuid;
    const {users} = !isEmpty(this.props.users) && this.props;
    const {approved, pending} = !isEmpty(this.props.requests) && this.props.requests;

    return this.props.auth.isAuthenticated && (
      <Fragment>
        <h2 className="mt-2">Approved</h2>
     
          {users && approved && !isEmpty(approved[following]) && approved[following].map((uuid) => (
            <div key={uuid} >
              
              <li className="list-group-item border-primary bg-light mb-1">
                    <div className="row justify-content-between align-items-center">
                         <div className="col-md-8 d-flex justify-content-between align-items-center">
                              <p className="text-dark">
                                <img  srcSet={`${users[uuid].picture.thumbnail} 480w, ${users[uuid].picture.medium} 960w, ${users[uuid].picture.large} 1440w`} alt={`${users[uuid].name.first} `}/>
                                   <span className="ml-5">{users[uuid].name.first} {users[uuid].name.last}</span>
                              </p>
                             
                         </div>
                         <div className="col-md-2 d-flex justify-content-end">
                              
                 <UButtons
               
               follower={uuid}
               following={following}
               type="deny"
               denyRequest={this.props.denyRequest}
              />
                         </div>
                    </div>
               </li>
            </div>
            
          ))}
          {users && approved && isEmpty(approved[following]) &&  <div class="alert alert-dismissible alert-light">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Sorry...!</strong>There is no users following you :(.
                  </div>

          }
       
        <h2>Pending</h2>
        
          {users && pending && !isEmpty(pending[following]) && pending[following].map((uuid) => (
            <div key={uuid} >
                    <li className="list-group-item border-primary bg-light mb-1">
                    <div className="row justify-content-between align-items-center">
                         <div className="col-md-8 d-flex justify-content-between align-items-center">
                            <p className="text-dark">
                                <img  srcSet={`${users[uuid].picture.thumbnail} 480w, ${users[uuid].picture.medium} 960w, ${users[uuid].picture.large} 1440w`} alt={`${users[uuid].name.first} `}/>
                                   <span className="ml-5">{users[uuid].name.first} {users[uuid].name.last}</span>
                              </p>
                              
                         </div>
                         <div className="col-md-2 d-flex justify-content-end">
                         <UButtons
               
               follower={uuid}
               following={following}
               type="approve"
               approveRequest={this.props.approveRequest}
              />
                         </div>
                    </div>
               </li>
            </div>
          ))}
          {users && pending && isEmpty(pending[following]) &&  <div class="alert alert-dismissible alert-light">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Heads up!</strong>There is no pending request to approve :).
                  </div>

          }

      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
  requests: state.requests,
  errors: state.errors
})

export default connect(mapStateToProps, { logoutUser, getUsers, getRequests, followRequest, approveRequest, denyRequest })(Requests);


