import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import PageHeader from '../components/PageHeader/PageHeader'
import Link from 'next/link'

export default () => 
    <>
        <Header/>
        <main id="main">
            <PageHeader/>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <h2 class="mt-5 mb-5 text-center">Ways you can help Samaritans</h2>
                <div class="card-deck">
                    <article class="card raised card--has-floating-link">
                        <div class="card-block">
                            <h3 class="h3 card-title">Be there for people who need someone</h3>
                            <div class="figure has-frame"><img class="image" src="//images.ctfassets.net/mhjf10clw0jh/43I9XsdyQoCK8yaYaiSMMI/5df095575cd2ba63d6410bf8605fdd08/homepage-lv.jpg" alt="" /></div>
                            <p class="card-text lead mt-4 mb-2">As a listening volunteer you’ll answer calls and messages from people who really need someone to talk to. You’ll be based in one of 201 branches in the UK and Ireland. </p>
                            <h4 class="h5 mt-5 mb-2">Does this sound like you?</h4>
                            <ul class="bullet-list">
                                <li class="bullet-list__item">You're interested in listening to people going through a tough time</li>
                                <li class="bullet-list__item">You're open-minded and non judgemental</li>
                                <li class="bullet-list__item">You're able to listen without telling people what to do</li>
                            </ul>
                            <Link href="/listening-volunteer">
                                <a class="btn btn--primary btn--absolute btn--arrow btn--title" data-gtm-event-action="Volunteer" data-gtm-event-label="Become a listening volunteer" data-gtm-event-category="Link click" data-gtm-hittype="event" role="button">Become a listening volunteer</a>
                            </Link>
                        </div>
                    </article>
                    <article class="card raised card--has-floating-link">
                        <div class="card-block">
                            <h3 class="h3 card-title">Support Samaritans in other ways</h3>
                            <div class="figure has-frame"><img class="image" src="//images.ctfassets.net/mhjf10clw0jh/4ChUm7xxYAQUMGGQiuIaQa/7194373b623e37cc85a91fef1463e5ef/homepage-bv.jpg" alt="" /></div>
                            <p class="card-text lead mt-4 mb-2">There are lots of things you could do to support us – marketing our services, fundraising, organising events, providing IT support or helping out in one of our shops. It all depends what you want to do and what you’re good at. </p>
                            <h4 class="h5 mt-5 mb-2">Does this sound like you?</h4>
                            <ul class="bullet-list">
                                <li class="bullet-list__item">You're good at working with other people</li>
                                <li class="bullet-list__item">You enjoy using your initiative</li>
                                <li class="bullet-list__item">You're organised</li>
                            </ul>
                            <Link href="/branch-volunteer">
                                <a class="btn btn--primary btn--absolute btn--arrow btn--title" data-gtm-event-action="Volunteer" data-gtm-event-label="Volunteer to support Samaritans" data-gtm-event-category="Link click" data-gtm-hittype="event" role="button">Volunteer to support Samaritans</a>
                            </Link>

                        </div>
                    </article>
                </div>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <blockquote class="blockquote media">
                    <div class="constrained">
                        <p class="h4 blockquote__content">I've learned so much about life and people. It's humbling and rewarding to be able to help in some small way by being there for people who need us.</p><cite class="blockquote__citation"><b>Lynsey</b><span> - Volunteer</span></cite></div>
                    <figure class="blockquote__image figure"><img src="//images.ctfassets.net/mhjf10clw0jh/6ezXkNc9aggGQGEAEIc4w8/1d178bdd0787a49f9db4dd4ce017f9d8/Volunteer.png" /></figure>
                </blockquote>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <div class="card-group card-group--flat card-group--divided">
                    <article class="card no-border">
                        <div class="card-block padded"><img class="image float-right" src="//images.ctfassets.net/mhjf10clw0jh/1HdiqZhpSEimqSiogQsQau/5975e88afad4e506e8928645b303b945/cake.png" />
                            <h3 class="h4 mt-3 mb-3">What you get out of being a volunteer</h3>
                            <p class="card-text">You’ll learn valuable new skills, make new friendships, and be part of an amazing group of people. But above all you’ll have the incredible satisfaction of knowing you’re helping people who are in despair.</p>
                        </div>
                    </article>
                    <article class="card no-border">
                        <div class="card-block padded"><img class="image float-right" src="//images.ctfassets.net/mhjf10clw0jh/15sb54I7tIsOcku4mKsci4/ab8e7289c2841beb3021a86e326d0102/star.png" />
                            <h3 class="h4 mt-3 mb-3">The kind of people we’re looking for</h3>
                            <p class="card-text">We’re just looking for people who want to help others, are tolerant and open-minded. You don’t have to have gone through particular life experiences or be a special kind of person. Everyone over 18 is welcome.</p>
                        </div>
                    </article>
                </div>
            </section>
        </main>
        <Footer/>
    </>