import Head from 'next/head'

export default () =>
    <header class="masthead">
        <Head>
            <link href="/static/style.css" rel="stylesheet" type="text/css"/>
        </Head>
        <div class="masthead__inner container-fluid d-sm-flex">
            <ul class="utility-nav list-unstyled">
                <li class="utility-nav__item"><a href="https://www.samaritans.org/support-us/donate-online" class="donate" data-gtm-event-action="Donate" data-gtm-event-label="Donate to Samaritans" data-gtm-event-category="Link click" data-gtm-hittype="event">Donate</a></li>
                <li class="utility-nav__item"><a href="https://www.samaritans.org/how-we-can-help-you/contact-us" class="contact" data-gtm-event-action="Contact" data-gtm-event-label="Contact the Samaritans" data-gtm-event-category="Link click" data-gtm-hittype="event">Contact</a></li>
            </ul>
            <div class="logo">
                <a href="https://www.samaritans.org/" data-gtm-event-action="Homepage" data-gtm-event-label="Return to the Samaritans homepage " data-gtm-event-category="Logo link click" data-gtm-hittype="event">
                    <figure class="figure"><img class="image" src="/static/img/logo.png" /></figure>
                </a>
            </div>
        </div>
    </header>