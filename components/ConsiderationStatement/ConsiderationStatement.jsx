const Scroll = require('react-scroll')
const Element = Scroll.Element

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collapsed: true,
            completed: false
        }
    }

    handleClick = () => {
        this.setState({
            completed: true
        })
        this.props.onAgreement();
    }

    render(){
        return(
            <Element name="2">
            <article class={(!this.state.completed)? "raised bg-white spacing--tight md-spacing--single padded padded--horizontal" : "raised bg-white spacing--tight md-spacing--single padded padded--horizontal ticked"}>
                <h3 class="h--quiet mb-3">{this.props.headline}</h3>
                <div class="lead">
                    <p>{this.props.explanation}</p>
                </div>
                <div class="collapsible">
                    <a onClick={()=>{
                        this.setState({
                            collapsed: !this.state.collapsed
                        })
                    }} class={(this.state.collapsed)? "collapsible_trigger" : "collapsible_trigger collapsible_trigger--active"} data-gtm-event-action="Click" data-gtm-event-label="Some of the things I may hear as a listening volunteer will be difficult" data-gtm-event-category="Volunteer Consideration Collapsible link" data-gtm-hittype="event">Tell me more</a>
                    {(!this.state.collapsed)?
                        <p>{this.props.collapsed}</p>
                    : null}
                </div>
                {(!this.state.completed)?
                    <button onClick={this.handleClick} class="btn mt-4 btn--title -larger float-md-right" data-gtm-event-action="Accepted" data-gtm-event-label="Some of the things I may hear as a listening volunteer will be difficult" data-gtm-event-category="Volunteer Consideration Step" data-gtm-hittype="event">That's OK, continue</button>
                : null }
            </article>
            </Element>
        )
    }
}