class IndecisionApp extends React.Component{
    
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: this.props.options
        } 
    }
    componentWillMount() {
        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options)    this.setState(() => ({options}))
        } catch (e) {
            console.log('Invalid JSON data')
        }
        
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    componentWillUnmount() {
        console.log('Compoenent will unmount!')
    }

    handleRemoveAll(){
        this.setState(() => ({options: []}))
    }
    handlePick(){
        console.log("shit")
        console.log(this.state.options.length)
        let num = Math.floor(Math.random() * this.state.options.length)
        let option = this.state.options[num]
        alert(option)
    }
    handleDeleteOption(option){
        this.setState((prevState) => ({
            options: prevState.options.filter((opt) => opt !== option)
        }))
    }

    handleAddOption(e){
        const option = e.target.elements.option.value
        const newOptions = [...this.state.options]
        newOptions.push(option)
        if (!option){
            return 'Error occurred!'
        } else {
            this.setState({
                options: this.state.options.concat([option])
            })
        }
    }

    render(){
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a Computer!'
        const options = ['Thing one', 'Thing two']
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}/>
                <Options options={this.state.options}
                         handleRemoveAll={this.handleRemoveAll}
                         handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}


const Header = (props) => {
        return (
            <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        )
}

Header.defaultProps = {
    title: 'Indecision'
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button 
                disabled = {!this.props.hasOptions} 
                onClick = {this.props.handlePick}>
                What should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component{
    render(){
        return (
            <div>
            {this.props.options.length === 0 && <p>Please enter an option to get started!</p>}
            <button onClick={this.props.handleRemoveAll}>
            Remove All
            </button>
            {this.props.options.map((opt) => {
                return (<Option handleDeleteOption={this.props.handleDeleteOption} 
                                key={opt} 
                                optionText={opt}/>)
            })}
            </div>
        )
    }
}


const Option = function(props){
        return (
            <div>
            Option: {props.optionText}
            <button onClick={() => {props.handleDeleteOption(props.optionText)}}>Remove</button>
            </div>
        )
    }


class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            error: undefined
        }
    }
    
    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={(e) => {
                e.preventDefault()
                const err = this.props.handleAddOption(e)
                this.setState(() => {
                    return {error: err}
                })

                if (!err) e.target.elements.option.value = ''
            }}>
                <input type='text' name='option'></input>
                <button>Add Option</button>
            </form>
            </div>
        )
    }
}


const User = () => {
    return (
        <div>
            <p>Name: </p>
            <p>Age: </p>
        </div>
    )
}

ReactDOM.render(<IndecisionApp options={['balls', 'shit']}/>, document.getElementById('app'))