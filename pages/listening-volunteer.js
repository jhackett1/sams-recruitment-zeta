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
                    <li class="breadcrumb__item active breadcrumb__item--last">Become a listening volunteer</li>
                </ul>
            </div>
            <section class="hero hero--accent hero--has-media">
                <div class="container-fluid">
                    <section class="row">
                        <div class="col-sm-12 col-md-6">
                            <h1 class="h1 mb-3">Become a Samaritans listening volunteer</h1>
                            <div class="lead">
                                <p>Listening volunteers are there for anyone who needs someone. They help more than 5.7 million people each year. And they can change the course of someone’s life. But many calls and messages to Samaritans go unanswered because we don’t have enough volunteers. That’s where you come in. Find out if being a listening volunteer is right for you. </p>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <figure class="figure"><img class="image" src="//images.ctfassets.net/mhjf10clw0jh/1YEaHi1ApK8aM8qScugkiC/0e80398b57667ff541c4a05850959c8f/listening_volunteer_hero.jpg" /></figure>
                        </div>
                    </section>
                </div>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <div class="card-group raised">
                    <article class="card no-border">
                        <div class="card-block padded">
                            <figure class="figure has-frame"><img src="//images.ctfassets.net/mhjf10clw0jh/2l6e40qsuEoSsmiwo2yMME/3b9c897afdb3840903edec49eb89c23f/Adobe_20180208_170300.jpg" /></figure>
                            <h3 class="h4 mt-3 mb-3">Help people at difficult times</h3>
                            <p class="card-text">Every six seconds someone contacts us. Every six seconds we can help someone turn their life around. As a listening volunteer you get the chance to make a real difference to someone’s future. </p>
                        </div>
                    </article>
                    <article class="card no-border">
                        <div class="card-block padded">
                            <figure class="figure has-frame"><img src="//images.ctfassets.net/mhjf10clw0jh/29DsGTAFEUUg6gaYO6kMgI/6d6d172d60fc4bb2f1973288368c9f06/Support_every_step.jpg" /></figure>
                            <h3 class="h4 mt-3 mb-3">Get support every step of the way</h3>
                            <p class="card-text">You’ll receive full training to prepare you for the kinds of conversations you’ll have. And when you start out, you’ll have a mentor with you, to give you confidence you’re doing the right thing. </p>
                        </div>
                    </article>
                    <article class="card no-border">
                        <div class="card-block padded">
                            <figure class="figure has-frame"><img src="//images.ctfassets.net/mhjf10clw0jh/16CeiETmXAswWmOO2iw6q8/35255cb923f54d0590fa31895dafaa39/lv-somethingspecial.jpg" /></figure>
                            <h3 class="h4 mt-3 mb-3">Learn to do something valuable</h3>
                            <p class="card-text">You’ll gain a range of new skills and the confidence to use them, including the ability to understand people and manage difficult conversations. Many employers value these kinds of skills. </p>
                        </div>
                    </article>
                </div>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <div class="">
                    <h2 class="mt-2 mb-3">What it’s like being a listening volunteer</h2>
                    <div class="row">
                        <div class="col-12 col-sm-6 push-sm-6">
                            <article>
                                <div class="embed-responsive embed-responsive-16by9">
                                    <figure class="figure figure--media"><iframe src="https://www.youtube.com/embed/ajKVUXp1Ibc?rel=0" width="500" height="281" frameBorder="0" allowfullscreen=""></iframe></figure>
                                </div>
                                <figcaption class="mt-3">Video length: 1min 36s</figcaption>
                            </article>
                        </div>
                        <div class="col-12 col-sm-6 pull-sm-6">
                            <ul class="bullet-list">
                                <li>It’s always different and always interesting – no two conversations are the same.</li>
                                <li>It feels like a privilege to have people confiding in you.</li>
                                <li>You’re never on your own, and there’s a fun, supportive atmosphere in our branches.</li>
                                <li>You can offer support on the phone, email or text.</li>
                                <li>You can take a break between conversations whenever you need to.</li>
                                <li>Spending a few hours helping other people can make you feel good about yourself.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <blockquote class="blockquote media">
                    <div class="constrained">
                        <p class="h4 blockquote__content">I was blown away by how prepared I felt to enter the phone lines and how helpful everyone was once I began taking calls.</p><cite class="blockquote__citation"><b>Lexy</b><span> - Samaritans volunteer</span></cite></div>
                    <figure class="blockquote__image figure"><img src="//images.ctfassets.net/mhjf10clw0jh/3byIKf9wFqCKEiwKGECGUw/bf8e90962701acda5f785ee00663cefd/volunteer-lexy.png" /></figure>
                </blockquote>
            </section>
            <section class="container-fluid spacing--large md-spacing--huge">
                <h2 class="mt-5 mb-2">How you need to treat people</h2>
                <ul class="tick-list tick-list--double">
                    <li>
                        <h3>Open minded</h3>You’re willing to understand someone else’s point of view, even if it’s different from yours.</li>
                    <li>
                        <h3>Discreet</h3>You’ll be careful with any information you&#x27;re told, and never share it outside Samaritans.</li>
                    <li>
                        <h3>Supportive</h3>You’ll help maintain a friendly and supportive atmosphere.</li>
                    <li>
                        <h3>Respectful</h3>You won’t discriminate against anyone for any reason, including gender, race, sexuality, disability or political views.</li>
                    <li>
                        <h3>Empathetic</h3>You’re comfortable with your own feelings and able to share another person’s feelings.</li>
                    <li>
                        <h3>Honest</h3>You’re able to tell the truth even when it’s difficult – for example about the type of support we can offer people, even when they want more.</li>
                </ul>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <h2 class="mt-2 mb-3">Can anyone be a listening volunteer?</h2>
                <div class="long-form">
                    <p><strong>Anyone has it in them to be a Samaritan</strong>. It doesn’t necessarily matter if you’ve gone through difficult times yourself, like mental health issues or a criminal record. </p>
                    <p>What matters is that you believe in what we believe in and you want to help people – all kinds of people, from all walks of life.</p>
                    <p>You need to be 18 or over, and because we&#39;ll invest in you (our training is really high quality), you need to see this not just as a short term role but something you&#39;re likely to do more long term.</p>
                    <p>Serving police officers and special constables can’t be listening volunteers because they have a duty to report crimes, whereas our focus is on listening.</p>
                    <p>And we have zero tolerance for anyone who tries to take advantage of the vulnerable people who contact us.</p>
                </div>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <div class="has-border border-black">
                    <h2 class="mt-2 mb-3">What kinds of conversations might I have?</h2>
                    <div class="row">
                        <div class="col-12 col-sm-6 push-sm-6 flex-vertical-align">
                            <figure class="figure"><img class="image" src="//images.ctfassets.net/mhjf10clw0jh/2r9MAJXt962asIwQyQwyg/86239024a02f26e4b998e7ad6a476c2a/call_split.png" /></figure>
                        </div>
                        <div class="col-12 col-sm-6 pull-sm-6">
                            <div class="lead">
                                <p>People of all kinds contact us about all kinds of problems. It could be depression, loneliness, stressful situations at home or work, debt, abuse. We listen, give them a chance to get it out, and talk things through with them. </p>
                                <p>Only about 1 in 5 calls or messages are from people feeling suicidal, and the vast majority of these aren’t actively planning to end their lives. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <h2 class="mt-2 mb-3">How much time will I need to give?</h2>
                <div class="long-form">Listening volunteers typically do one shift of about 3 to 4 hours a week (the exact amount of time depends on the branch).</div>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <div class="card-group card-group--flat card-group--divided card-group--centred">
                    <article class="card no-border">
                        <div class="card-block padded"><img class="image float-right" src="//images.ctfassets.net/mhjf10clw0jh/15sb54I7tIsOcku4mKsci4/ab8e7289c2841beb3021a86e326d0102/star.png" />
                            <h3 class="h4 mt-3 mb-3">Will I need to volunteer at night?</h3>
                            <p class="card-text">We need more volunteers at night so we're there whenever people need us – and often they need us most in the middle of the night, and there's nowhere else to go. Our volunteers often say that the conversations they have during the night are the ones they feel have made the biggest difference. A night shift is usually 4 to 6 hours every 4 to 8 weeks, but if nights are particularly difficult for you we can be flexible. We’ll cover your travel expenses so you can get home safely. </p>
                        </div>
                    </article>
                    <div class="card no-border">
                        <article class="card-block padding">
                            <div class="embed-responsive embed-responsive-16by9">
                                <figure class="figure figure--media"><iframe src="https://www.youtube.com/embed/hSW0BoCcP90?rel=0" width="500" height="281" frameBorder="0" allowfullscreen=""></iframe></figure>
                            </div>
                            <figcaption class="mt-3">Video length: 50 secs</figcaption>
                        </article>
                    </div>
                </div>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <blockquote class="blockquote media">
                    <div class="constrained">
                        <p class="h4 blockquote__content">One thing that I always take away from a shift is the &#x27;feel-good factor&#x27;. Working in an environment with positive people and occasionally being told that just being there made all the difference to someone&#x27;s life is reward enough for me.</p><cite class="blockquote__citation"><b>Herbie</b><span> - Volunteer</span></cite></div>
                    <figure class="blockquote__image figure"><img src="//images.ctfassets.net/mhjf10clw0jh/10QwjF44bAqqm4Y02Mgi22/b70b18ef4331497bea19241334bb4889/volunteer_herbie.png" /></figure>
                </blockquote>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <h2 class="mt-5 mb-5 text-center">What support and training will I get?</h2>
                <div class="card-group raised">
                    <article class="card no-border">
                        <div class="card-block padded">
                            <figure class="figure has-frame"><img src="//images.ctfassets.net/mhjf10clw0jh/CTxOXjly5qMgGuiiI8Uys/78581f70884541552647caea6f0723d2/samaritans-training.jpg" /></figure>
                            <h3 class="h4 mt-3 mb-3">Training</h3>
                            <p class="card-text">
                                <p>You&#39;ll be given high quality training to prepare you for the role. The training takes place during weekday evenings or weekends, and there are 10 sessions lasting 3 hours each. It typically takes a few months before you&#39;re ready to start volunteering.</p>
                                <p>You’ll also receive ongoing training several times a year to keep building your skills.</p>
                            </p>
                        </div>
                    </article>
                    <article class="card no-border">
                        <div class="card-block padded">
                            <figure class="figure has-frame"><img src="//images.ctfassets.net/mhjf10clw0jh/VOVSv70LuKAgY2Qks0oQo/8b42b2b6d1373646ca500c5cf24efe94/lv-mentoring.jpg" /></figure>
                            <h3 class="h4 mt-3 mb-3">Mentoring</h3>
                            <p class="card-text">
                                <p>Towards the end of the training, you’ll be given a mentor – an experienced volunteer who will sit with you during your first few shifts.</p>
                                <p>They’ll give you feedback and support, answer your questions, and help develop your confidence.</p>
                            </p>
                        </div>
                    </article>
                    <article class="card no-border">
                        <div class="card-block padded">
                            <figure class="figure has-frame"><img src="//images.ctfassets.net/mhjf10clw0jh/6Hur4R38Q0iAuaAwASSgOm/8cc2620dc2a102efafd694cc9367910f/Support_on_shifts.jpg" /></figure>
                            <h3 class="h4 mt-3 mb-3">Support</h3>
                            <p class="card-text">
                                <p>You’ll never be on your own as a listening volunteer. And there’s always time to talk through anything.</p>
                                <p>Sharing what’s happened with other Samaritans is a good way of dealing with anything you find difficult.</p>
                            </p>
                        </div>
                    </article>
                </div>
            </section>
            <section class="container-fluid spacing--large md-spacing--huge">
                <h2 class="mt-5 mb-2">How do I become a listening volunteer?</h2>
                <div class="lead mb-5">You'll go through an enquiry and selection process, followed by in-depth training. </div>
                <ul class="number-list">
                    <li>
                        <h3><span class="number-list__pos">1</span>Complete the enquiry form online</h3>It&#x27;s quick – we just need a few details.</li>
                    <li>
                        <h3><span class="number-list__pos">2</span>Go through a selection process</h3>We&#x27;ll want to get to know you more, and why you want to become a volunteer.</li>
                    <li>
                        <h3><span class="number-list__pos">3</span>Complete a criminal record check</h3>If you have a criminal record it won&#x27;t necessarily stop you from becoming a volunteer. We’ll consider each case individually.</li>
                    <li>
                        <h3><span class="number-list__pos">4</span>Provide references</h3>We&#x27;ll ask you for the details of two people who are happy to give you a reference.</li>
                    <li>
                        <h3><span class="number-list__pos">5</span>Start your training</h3>This usually takes place over 10 sessions and covers everything you&#x27;ll need.</li>
                    <li>
                        <h3><span class="number-list__pos">6</span>Be paired with a mentor</h3>You’ll have an experienced volunteer with you for your first few shifts.</li>
                    <li>
                        <h3><span class="number-list__pos">7</span>Start your role</h3>You’ll start your shifts with your mentor alongside you. And you’ll be given ongoing support and training as time goes on.</li>
                </ul>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <div class="has-border border-green">
                    <h2 class="mt-2 mb-3">Ready to enquire?</h2>
                    <div class="row">
                        <div class="col-12 col-sm-6 push-sm-6 flex-vertical-align">
                            <Link href="/considerations">
                                <a href="/volunteer/listening-volunteer/enquire/considerations" class="btn btn--large btn--title float-right d-none d-sm-block btn--title btn--arrow" data-gtm-event-action="Enquire" data-gtm-event-label="Enquire about being a listening volunteer" data-gtm-event-category="Link click" data-gtm-hittype="event" role="button">Enquire now</a>
                            </Link>
                        </div>
                        <div class="col-12 col-sm-6 pull-sm-6">
                            <div class="lead">Enquiring won't take long, but make sure you've read everything on this page first. </div>
                                <Link href="/considerations">
                                    <a class="btn mt-4 btn--large btn--title d-sm-none btn--title btn--arrow" data-gtm-event-action="Enquire" data-gtm-event-label="Enquire about being a listening volunteer" data-gtm-event-category="Link click" data-gtm-hittype="event" role="button">Enquire now</a>
                                </Link>
                            </div>
                    </div>
                </div>
            </section>
            <section class="container-fluid spacing--large lg-spacing--huge">
                <div class="">
                    <div class="row">
                        <div class="col-12 col-sm-8 col-sm-6">
                            <h2 class="mt-2 mb-3">Do you have more questions?</h2>
                            <div>Our team of experts are on hand to answer any questions you may have about becoming a volunteer.</div>
                            <div><a class="icon-link mt-3" href="mailto:volunteering@samaritans.org"><span class="icon icon--large icon--email"></span><span class="d-inline-block">Email us</span></a></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>