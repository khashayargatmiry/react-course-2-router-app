class Counter extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count: props.count,
        }
        this.handleMinus = this.handleMinus.bind(this)
    }

    componentDidMount() {
        let count = localStorage.getItem('count')
        count = parseInt(count)
        if (!isNaN(count)) {
            this.setState(() => ({count: count}))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) localStorage.setItem('count', this.state.count)
    }

    handleMinus(){
        /* this.setState((prevState) => {
            return {
                count: prevState.count--
            }
        }) */
        this.setState({
            count: this.state.count - 1
        })
        console.log('the state is ', this.state)
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>
                plus
                </button>
                <button onClick={() => {
                    this.setState({
                        count: 0
                    })
                }}>reset</button>
                <button onClick={this.handleMinus}>minus</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 100
}

ReactDOM.render(<Counter />, document.getElementById('app'))