import React, {Component} from 'react'

class ErrorBoundary extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info){
		this.setState({hasError: true})
	}

	render(){
		if (this.state.hasError){
			return <h1>oooops... We couldn't quite get that yet</h1>
		}
		return this.props.children
	}
}


export default ErrorBoundary