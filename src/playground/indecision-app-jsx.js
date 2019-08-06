


const app = {
    title: 'Indecision app',
    subtitle: 'Shit',
    options: [],
    numbers: [1,2,3],
    showDetails: false
}

let count = 0
var appRoot = document.getElementById('app')

const onFormSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted')
    const option = e.target.elements.option.value
    if (option) {
        console.log('option is ', option)
        app.options.push(option)
        console.log(app.options)
        e.target.elements.option.value = ''
    }
    renderApp()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    //console.log(randomNum)
    //console.log(option)
    alert(option)
}

const renderApp = () => {
    let templateTwo = (
        <div>
            <h1>{app.title}</h1>
            <h2>{app.options.length == 0 ? 'There are no options': 
                'Here are the options'}
            </h2>
            <p>{app.options.length}</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
            <button onClick={() => {
                app.options = []
                renderApp()
            }}>
            Clear
            </button>
            <ol>
               {
                app.options.map((option) => <li key={option}>{option}</li>)
               }
            </ol>
            <button onClick={() => {
                app.showDetails = !app.showDetails
                renderApp()
            }}>{app.showDetails? 'Hide Details' : 'Show Details'}</button>
            {app.showDetails && <p>Here are the details</p>}
        </div> 
    )
    ReactDOM.render(templateTwo, appRoot)
}


renderApp()