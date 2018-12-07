const Scroll = require('react-scroll')
const Element = Scroll.Element
const scroller = Scroll.scroller

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Link from 'next/link'
import ConsiderationStatement from '../components/ConsiderationStatement/ConsiderationStatement';

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            progress: 1,
            finished: false
        }
    }

    scrollDown = () => {
        // Scroll next statement into viewport
        setTimeout(()=>{
            scroller.scrollTo('2', {
                duration: 300,
                smooth: true,
                offset: -50
                })
        }, 250)
    }

    handleAgeeement = () => {
        // Increase progress by one
        this.setState({
            progress: this.state.progress + 1
        })
        this.scrollDown()
    }

    handleFinalAgeeement = () => {
        this.setState({
            progress: this.state.progress + 1,
            finished: true
        })
        this.scrollDown()
    }

    render(){
        return(
            <>
                <Header/>
                <main id="main">
                    <div class="breadcrumb pt-3 bg-green">
                        <ul class="breadcrumb__list container-fluid mb-0">
                            <li class="breadcrumb__item"><a href="http://samaritans.org" class="breadcrumb__link">Home</a></li>
                            <li class="breadcrumb__item"><Link href="/"><a class="breadcrumb__link">Volunteering with Samaritans</a></Link></li>
                            <li class="breadcrumb__item"><Link href="/listening-volunteer"><a class="breadcrumb__link">Become a listening volunteer</a></Link></li>
                            <li class="breadcrumb__item active breadcrumb__item--last">Considerations</li>
                        </ul>
                    </div>
                    <section class="hero hero--accent hero--has-media">
                        <div class="container-fluid">
                            <section class="row">
                                <div class="col-sm-12 col-md-12">
                                    <h1 class="h1 mb-3">Stop and think for a moment</h1>
                                    <div class="lead"></div>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section class="container-fluid spacing--large lg-spacing--huge">
                        <p class="lead">Being a volunteer can be difficult at times, and it’s not for everyone. Before you apply, we want to make sure that being a listening volunteer is right for you.</p>
                    </section>
                    <section class="container-fluid spacing--large lg-spacing--huge">

                        <ConsiderationStatement
                            name={0}
                            onAgreement={this.handleAgeeement}
                            headline="I understand that some of the things I may hear as a listening volunteer will be difficult."
                            explanation="People contact us when they’re feeling desperate, angry, grieving or in pain. Some of them are feeling suicidal."
                            collapsed="Some things people tell us can be particularly tough to hear. But you can always take time out and talk it through with another volunteer. When you become a volunteer you join a community of people all facing the same challenges."
                            />

                        {(this.state.progress > 1)?
                            <ConsiderationStatement
                                name={1}
                                headline="I understand that I can’t tell people who contact us what to do."
                                explanation="Our role as listening volunteers is to listen. You may really want to tell people what to do, or what not to do, but you can’t."
                                collapsed="Not giving advice can be difficult at times, but just being there for people, offering a human presence, is hugely important."
                                onAgreement={this.handleAgeeement}
                                />
                        : null}

                        {(this.state.progress > 2)?
                            <ConsiderationStatement
                            name={2}
                                headline="I understand that I may have to listen to someone take their own life."
                                explanation="If someone has made the decision to end their life, you have to accept that. All you can do is be there for them as long as they need you."
                                collapsed="The majority of people who contact us aren’t suicidal, but very occasionally you might have someone who is not only suicidal but intending to go through with it. Our training will help prepare you for these kinds of situations – and the people around you at Samaritans will talk things through as much as you need."
                                onAgreement={this.handleAgeeement}
                                />
                        : null}

                        {(this.state.progress > 3)?
                            <ConsiderationStatement
                                name={3}
                                headline="I am able to listen to others without judgement."
                                explanation="You have to support callers even if they’re doing things you don’t approve of."
                                collapsed="It’s really important that people are able to contact us without feeling that we’ll make judgements about them. Our training will help you to offer support without judging people."
                                onAgreement={this.handleAgeeement}
                                />
                        : null}

                        {(this.state.progress > 4)?
                            <ConsiderationStatement
                                name={4}
                                headline="I can cope with feeling deeply uncomfortable."
                                explanation="You sometimes have to hear about difficult things that have happened to someone. You'll also often never know what happens to someone after they've been in contact."
                                collapsed="The people who contact us are going through a tough time, and very often that’s because bad things have happened to them. But we don’t have the option of putting the phone down or walking away. We have to be willing to hear about these things.

                                But if things ever do get on top of you, you can take a break. And you can ask another volunteer for support. You’ll be surrounded by people who know exactly what you’re going through."
                                onAgreement={this.handleFinalAgeeement}
                                />
                        : null}

                        {(this.state.finished)?
                            <Element name="2">
                                <section class="All spacing-bottom--single final-scroll-point spacing-top--huge">
                                    <div class="has-border border-green">
                                        <div class="row">
                                            <div class="col-12 col-sm-6 push-sm-6 flex-vertical-align">
                                                <Link href="/listening-volunteer/which-branch">  
                                                    <a class="btn btn--large btn--title float-right d-none d-sm-block btn--arrow btn--title" data-gtm-event-action="Click" data-gtm-event-label="Volunteer listening volunteer application" data-gtm-event-category="Button link click" data-gtm-hittype="event" role="button">Enquire now</a>
                                                </Link>
                                            </div>
                                            <div class="col-12 col-sm-6 pull-sm-6">
                                                <h2 class="mt-2 mb-3">It’s great you feel you’re right for the role. Let’s start the application process…</h2>
                                                <Link href="/listening-volunteer/which-branch">                                            
                                                    <a class="btn mt-4 btn--large btn--title d-sm-none btn--arrow btn--title" data-gtm-event-action="Click" data-gtm-event-label="Volunteer listening volunteer application" data-gtm-event-category="Button link click" data-gtm-hittype="event" role="button">Enquire now</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </Element>

                        : null}

                        <div class={(this.state.finished)? "long-form has-border border-purple" : "long-form has-border border-purple spacing-top--huge"} >
                            <h2 class="h2">Not sure if this role is for you?</h2>
                            <p class="lead">If you have questions please <a href="mailto:volunteering@samaritans.org">email us</a> and we’ll try to help.</p>
                            <h3 class="h2 no-caps spacing-top--single">If you’re not comfortable, there are other ways to help</h3>
                            <p class="lead">There are lots of things you could do to support us – marketing our services, fundraising, organising events, providing IT support, or helping out in one of our shops. It all depends what you want to do and what you’re good at.<br/><a href="/volunteer/other-support/" data-gtm-event-action="Navigate" data-gtm-event-label="I do not think listening volunteering is for me" data-gtm-event-category="Link click" data-gtm-hittype="event">Find out more</a></p>
                        </div>
                    </section>
                </main>
                <Footer/>
            </>
        )
    }
}
