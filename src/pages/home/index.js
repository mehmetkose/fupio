import { h, Component } from 'preact';

import Footer from '../../components/footer';
import Loading from '../../components/loading';

const { redirectToSignIn } = window.blockstack;

export default class Default extends Component {
	constructor(props) {
		super(props)
	}
	handleSignIn = (e) => {
		e.preventDefault();
		this.setState({ clickedLogin: true })
		const origin = window.location.origin;
		redirectToSignIn(origin, origin + '/manifest.json', ['store_write', 'publish_data'])
	};
	render() {
		return (
			<div class="container">
				<div class="index">
					<div class="row">
						<section class="col">

							<h1 class="logo">Fupio</h1>
							<h2>Decentralized Autonomous Zone</h2>
							<h3>Finally an unstoppable social network that not watching you. Powereded by Blockchain technologies.</h3>
							<button class="action red" onClick={this.handleSignIn}>
								{!this.state.clickedLogin ? "Sign In with Blockstack" : <Loading />}
							</button>
							<p style="margin-top: 0.5em; font-size: 0.8em">
								<i>
									You need a <strong>Blockstack</strong> account to sign in.
									Blockstack is a <strong>different</strong> project then Fupio,
									which is gives you decentralized identity and you can sign in
									bunch of <a href="https://app.co" target="_blank"><strong>dapps</strong></a> with it.
								</i>
							</p>

							<hr />

							<section class="col" style="padding-right: 1em">
								<h2>What is Blockstack?</h2>
								<p>
									Blockstack is a new infrastructure for decentralized apps that you access through the Blockstack Browser. With Blockstack, there is a new world of apps that let you own your data and maintain your privacy, security and freedom.
								</p>
								<p>
									Building an ecosystem that gives your users control over their fundamental digital rights: Identity, data-ownership, privacy, and security.
								</p>
							</section>

						</section>
						<section class="col watermelon">
							<div style="transform: scale(0.9)">
								<div class="marvel-device iphone5c green" style="box-shadow:1px 1px 23px 0px #3c3d3d">
									<div class="top-bar"></div>
									<div class="sleep"></div>
									<div class="volume"></div>
									<div class="camera"></div>
									<div class="sensor"></div>
									<div class="speaker"></div>
									<div class="screen">
										<img src="/assets/wall.png"></img>
									</div>
									<div class="home"></div>
									<div class="bottom-bar"></div>
								</div>
							</div>
						</section>
					</div>
				</div>
				<hr />
				<div class="why">
					<div class="row">
						<section class="col" style="padding-left: 1em">
							<h2>Problem</h2>
							<h3>Too many distractions.</h3>
							<p>
								It's difficult to focus between irrelevant content. Users
								follow the tags instead of people.
							</p>
							<h3>Freedom.</h3>
							<p>
								The platform lets you determine and fix your
								own issues with the community without any
								administration.
							</p>

						</section>
						<section class="col" style="padding-right: 1em">
							<h2>How It Works?</h2>
							<p>
								Fupio uses tags to categorize the posts. In this way, users do not waste
								time with posts outside of their interests.
							</p>
							<p>Fupio is based on a very simple idea. In practice, we can say that it looks like
							FriendFeed or Reddit. Rather than adding more features, Fupio focused a few
							functional features. We believe that tagging the posts and keep up the good ones is
							helpful for the community quality. </p>
						</section>
						<section class="col" style="padding-left: 1em">
							<h2>Manifest</h2>
							<p>
								Social networking communities should be free when sharing their thoughts. The
								platform should be democratic, and the community itself should decide on the
								unwanted content. Platform data should be public and private information should not
								be requested from the user.
							</p>

						</section>

					</div>
				</div>
				<hr />
				<Footer {...this.props} />
			</div>
		);
	}
}
