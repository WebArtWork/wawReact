import React, {Component} from 'react';

import LogIn from './components/LogIn';



export default class App extends Component {

	state ={
		data: {},
		isFetching: true,
		error: null
	}

	 componentWillMount(){
        fetch('/api/user/status')
            .then(response => response.json())
            .then(result => {
            	 this.setState({data: result});
                    this.setState({isLoaded: true});
            	})
            .catch(e => {
             	 console.log(e);
                this.setState({false: true});
                this.setState({e});
          })

    }


	render(){

		  const { data, isFetching, error } = this.state;
        
        // if (isFetching) {
        // 	return <div>...Loading</div>
        // };

        // if (error){ 
        // 	return <div>{`Error: ${error.message}`}</div>
        // };

  return (
    <div>
    <h1>{/*data.user[0].name*/}</h1>
    	<LogIn/>
    </div>
  )
}
}

