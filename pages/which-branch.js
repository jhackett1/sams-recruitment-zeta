import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default class extends React.Component {
    static getInitialProps ({ query: { role } }) {
        // Make the role, stored in the URL, available as a prop
        return {
            role: role
        }
    }

    constructor(props){
        super(props)
        this.state = {
            query: ""
        }
    }

    // Controlled form input change handler
    handleChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    // Make API call on form submit
    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/api/get-branches?q=${this.state.query}`, {
            method: "POST"
        })
            .then((res)=>{
                res.json().then((json)=>{
                    console.log(json)
                })
            })
    }
  
    render () {
        return (
            <>
                <Header/>
                <main id="main">
                    <section class="hero hero--accent hero--has-media">
                        <div class="container-fluid">
                            <section class="row">
                                <div class="col-sm-12 col-md-12">
                                    <h1 class="h1 mb-3">Which branch will you be volunteering at?</h1>
                                    <div class="lead"></div>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section class="container-fluid spacing--large lg-spacing--huge branch-search">
                        <form onSubmit={this.handleSubmit} method="post" class="raised bg-white spacing--tight md-spacing--single padded branch-search__search ">
                            <h2 class="spacing-bottom--single">Where would you like to volunteer?</h2>
                            <label for="branch-search__search__keyword" class="branch-search__search-label">Postcode or town/city</label>
                            <div class="branch-search__search-wrapper">
                                <input value={this.state.query} onChange={this.handleChange} type="search" id="branch-search__search__keyword" name="address" class="form-control form-control-lg branch-search__search-keyword" />
                            </div>
                            <button class="btn branch-search__search-submit" type="submit">Search</button>
                        </form>
                    </section>
                </main>
                <Footer/>
            </>
        )
    }
}