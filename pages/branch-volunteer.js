import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Link from 'next/link'

export default () => 
    <>
        <Header/>
        <main id="main">
            <div class="breadcrumb pt-3 bg-green">
                <ul class="breadcrumb__list container-fluid mb-0">
                <li class="breadcrumb__item"><a href="http://samaritans.org" class="breadcrumb__link">Home</a></li>
                    <li class="breadcrumb__item"><Link href="/"><a class="breadcrumb__link">Volunteering with Samaritans</a></Link></li>
                    <li class="breadcrumb__item active breadcrumb__item--last">Volunteer to support Samaritans</li>
                </ul>
            </div>
            <section class="hero hero--accent hero--has-media">
                <div class="container-fluid">
                    <section class="row">
                        <div class="col-sm-12 col-md-12">
                            <h1 class="h1 mb-3">Support Samaritans in other ways</h1>
                            <div class="lead">
                                <p>Our volunteers keep Samaritans going. They make it possible for us to be here for anyone who needs someone.</p>
                                <p>There&#39;s a whole range of things that need to be done. You could help one of our branches raise money or promote its services, organise an event, keep our computers working, volunteer to help in one of our fundraising shops or generally keep things running smoothly. </p>
                                <p>Find out if volunteering to support Samaritans is right for you. </p>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <div class="card-group raised">
                    <article class="card no-border">
                        <div class="card-block padded">
                            <figure class="figure has-frame"><img src="//images.ctfassets.net/mhjf10clw0jh/23SiEZdPC4mgMsI8GU62wa/f4d3d14aa4b7db5964205875068b3b31/bv-share.jpg" /></figure>
                            <h3 class="h4 mt-3 mb-3">Share your skills</h3>
                            <p class="card-text">We need support with tasks such as event organising, IT, maintenance, fundraising and marketing. If you have skills in these kinds of areas, volunteering is a great way to help Samaritans.</p>
                        </div>
                    </article>
                    <article class="card no-border">
                        <div class="card-block padded">
                            <figure class="figure has-frame"><img src="//images.ctfassets.net/mhjf10clw0jh/3tSy7Ea6NGu86M0w4GEOma/975e552db3df88299d90534c09151402/bv-learn.jpg" /></figure>
                            <h3 class="h4 mt-3 mb-3">Learn new skills</h3>
                            <p class="card-text">We need your help if you’re happy to be trained in new skills. For example you’ll learn how to use our IT systems or help raise money. These skills often prove useful at work – and on your CV.</p>
                        </div>
                    </article>
                    <article class="card no-border">
                        <div class="card-block padded">
                            <figure class="figure has-frame"><img src="//images.ctfassets.net/mhjf10clw0jh/6r6f78JtwAAY202OQyiYUq/8e90d2d9c6108eba39587434e543f7d7/bv-give.jpg" /></figure>
                            <h3 class="h4 mt-3 mb-3">Give something back</h3>
                            <p class="card-text">Whatever you do for Samaritans, you will be helping to change people’s lives for the better. That’s even true for your own life. Our volunteers say they find volunteering incredibly rewarding.</p>
                        </div>
                    </article>
                </div>
            </section>
            <section class="container-fluid spacing--large md-spacing--huge">
                <h2 class="mt-5 mb-2">Types of tasks we need help with</h2>
                <ul class="tick-list tick-list--double">
                    <li>
                        <h3>Marketing</h3>This might involve running a social media channel, keeping the website updated or writing press releases.</li>
                    <li>
                        <h3>IT support</h3>We need help keeping our technology up and running – anything from keeping software updated to troubleshooting when something goes wrong.</li>
                    <li>
                        <h3>Volunteer enquiries</h3>We need to respond to enquiries from potential new volunteers, and help them through their training.</li>
                    <li>
                        <h3>Fundraising</h3>This is a vital job – organising events that raise money to keep our services running.</li>
                </ul>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <div class="">
                    <h2 class="mt-2 mb-3">What it’s like being a volunteer</h2>
                    <div class="row">
                        <div class="col-12 col-sm-6 push-sm-6">
                            <article>
                                <div class="embed-responsive embed-responsive-16by9">
                                    <figure class="figure figure--media"><iframe src="https://www.youtube.com/embed/mqkVqzpnN4Q?rel=0" width="500" height="281" frameBorder="0" allowfullscreen=""></iframe></figure>
                                </div>
                                <figcaption class="mt-3">Video length: 1min 46sec</figcaption>
                            </article>
                        </div>
                        <div class="col-12 col-sm-6 pull-sm-6">
                            <ul class="bullet-list">
                                <li>It’s very sociable and you’ll meet some amazing people.</li>
                                <li>You’ll experience a warm and supportive atmosphere.</li>
                                <li>Working for a good cause is inspiring and makes you feel good about yourself.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <blockquote class="blockquote media">
                    <div class="constrained">
                        <p class="h4 blockquote__content">I&#x27;m pleased to be able to contribute to the work Samaritans does and to help take some of the pressure off listening volunteers</p><cite class="blockquote__citation"><b>Barry</b><span> - Branch volunteer</span></cite></div>
                    <figure class="blockquote__image figure"><img src="//images.ctfassets.net/mhjf10clw0jh/6g25MhO7KgwiYsuGgEkk6Q/bf8e90962701acda5f785ee00663cefd/volunteer-barry.png" /></figure>
                </blockquote>
            </section>
            <section class="container-fluid spacing--large md-spacing--huge">
                <h2 class="mt-5 mb-2">How you need to treat people</h2>
                <div class="lead mb-5">It is important you believe in the same ways of treating other people that we do. </div>
                <ul class="tick-list tick-list--double">
                    <li>
                        <h3>Open minded</h3>You’re willing to understand someone else’s point of view, even if it’s different from yours.</li>
                    <li>
                        <h3>Discreet</h3>You’ll be careful with any information you&#x27;re told, and never share it outside Samaritans.</li>
                    <li>
                        <h3>Supportive</h3>You’ll help maintain a supportive and friendly atmosphere.</li>
                    <li>
                        <h3>Respectful</h3>You won’t discriminate against anyone for any reason, including gender, race, sexuality, disability or political views.</li>
                    <li>
                        <h3>Empathetic</h3>You’re comfortable with your own feelings and able to share another person’s feelings.</li>
                    <li>
                        <h3>Honest</h3>You’re able to tell the truth even when it’s difficult – for example about the type of support we can offer people, even when they want more.</li>
                </ul>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <h2 class="mt-2 mb-3">How much time will I need to give?</h2>
                <div class="long-form">Different roles require different amounts of time, and the times when they’re needed can vary. You can give as much or as little time as you’re able to. </div>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <blockquote class="blockquote media">
                    <div class="constrained">
                        <p class="h4 blockquote__content">It’s very fulfilling. It’s great being part of an organisation, working with people of all ages, all kinds of backgrounds.</p><cite class="blockquote__citation"><b>Helen</b><span> - Volunteer</span></cite></div>
                    <figure class="blockquote__image figure"><img src="//images.ctfassets.net/mhjf10clw0jh/2oF4X6KxQAsK0YQ4eaGwSe/6ac2ba3968f91e443eb65ee60eeb5562/volunteer_helen.png" /></figure>
                </blockquote>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <h2 class="mt-5 mb-5 text-center">What support and training will I get?</h2>
                <div class="card-group raised">
                    <article class="card no-border">
                        <div class="card-block padded">
                            <figure class="figure has-frame"><img src="//images.ctfassets.net/mhjf10clw0jh/2cWLbfVQ4Yo0wkayKaQQki/b3223161712331fdef16c88dc6e94a80/training.jpg" /></figure>
                            <h3 class="h4 mt-3 mb-3">Training</h3>
                            <p class="card-text">
                                <p>You’ll attend the same induction session as our listening volunteers, which will give you an understanding of what we do and don’t do. We’ll also explain our vision and our values.</p>
                                <p>Once you start volunteering we’ll support you in specific tasks and roles.</p>
                            </p>
                        </div>
                    </article>
                    <article class="card no-border">
                        <div class="card-block padded">
                            <figure class="figure has-frame"><img src="//images.ctfassets.net/mhjf10clw0jh/19xKZgwhd8AMcaUie2qMwi/4cf04462524883fabf20106657fb68ae/laughing-man.jpg" /></figure>
                            <h3 class="h4 mt-3 mb-3">Support in the role</h3>
                            <p class="card-text">
                                <p>If you need support there will always be someone who can give you a hand, explain something or just have a chat. </p>
                            </p>
                        </div>
                    </article>
                </div>
            </section>
            <section class="container-fluid spacing--large md-spacing--huge">
                <h2 class="mt-5 mb-2">How do I become a volunteer?</h2>
                <div class="lead mb-5">You'll go through an enquiry and selection process, followed by in-depth training. </div>
                <ul class="number-list">
                    <li>
                        <h3><span class="number-list__pos">1</span>Complete the enquiry form online</h3>It&#x27;s quick – we just need a few details.</li>
                    <li>
                        <h3><span class="number-list__pos">2</span>Go through a selection process</h3>We&#x27;ll want to get to know you more, and why you want to become a volunteer.</li>
                    <li>
                        <h3><span class="number-list__pos">3</span>Provide references</h3>We&#x27;ll ask you for the details of two people who are happy to give you a reference.</li>
                    <li>
                        <h3><span class="number-list__pos">4</span>Start your training</h3>You’ll attend an induction session to give you an understanding of what we do and don’t do, our vision and our values.</li>
                    <li>
                        <h3><span class="number-list__pos">5</span>Start your role</h3>You’ll begin your role, playing your part in supporting what we do.</li>
                </ul>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <div class="has-border border-green">
                    <h2 class="mt-2 mb-3">Ready to enquire?</h2>
                    <div class="row">
                        <div class="col-12 col-sm-6 push-sm-6 flex-vertical-align">
                            <Link href="/branch-volunteer/which-branch">
                                <a class="btn btn--large btn--title float-right d-none d-sm-block btn--arrow btn--title" data-gtm-event-action="Enquire" data-gtm-event-label="Enquire about being a branch support volunteer" data-gtm-event-category="Button click" data-gtm-hittype="event" role="button">Enquire now</a>
                            </Link>
                        </div>
                        <div class="col-12 col-sm-6 pull-sm-6">
                            <div class="lead">Enquiring won't take long, but make sure you've read everything on this page first.</div>
                            <Link href="/branch-volunteer/which-branch">
                                <a class="btn mt-4 btn--large btn--title d-sm-none btn--arrow btn--title" data-gtm-event-action="Enquire" data-gtm-event-label="Enquire about being a branch support volunteer" data-gtm-event-category="Button click" data-gtm-hittype="event" role="button">Enquire now</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>