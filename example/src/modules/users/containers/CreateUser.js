import {connect} from 'react-redux';
import * as actions from '../actions';
import CreateUser from '../components/CreateUser';

export default connect(
    null, {
    	onCreate: actions.createUser
    }
)(CreateUser);