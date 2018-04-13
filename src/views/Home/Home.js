import React from 'react';
import Chart from '../../components/Chart/Chart';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';
import LoadData from '../../components/LoadData/LoadData';


function Home(props) {
    return (
        props.user ? <Chart/> : <LoadData />
    )
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(Home);