<script>
	let didread = false;
	const discordlink = 'https://discord.gg/VdPzMwP';
	let buttonMessage = 'Join the Discord'
	const join = () => {
		if (!didread) {
			buttonMessage = 'Click this button again if you really did read the message above. If you did not read it... please read it?';
			didread = true;
		} else {
			buttonMessage = 'Okay! Here we go...';
			setTimeout(() => {
				window.open(discordlink, 'blank', 'noopener');
			}, 800);
		}
	};
</script>

<svelte:head>
	<title>Coding Garden Discord</title>
</svelte:head>

<div class="instructions">
	<img class="logo" alt="Coding Garden Logo" src="/images/curly.png" />
	<div>
		<h1 class="center">
			So you want to join the <span class="green">Coding Garden</span> Discord?
		</h1>
		<h3 class="center yellow">There are a few things you will need to do!</h3>
		<ol>
			<li class="red">Read this entire message. Seriously. Read it.</li>
			<li>
				Click the button at the bottom of the page to Join the Discord. (Sign up for a discord
				account if you have not yet!)
			</li>
			<li>
				After joining the server, you will have <span class="red">read only access</span>, and will
				only see a few channels. You will need to
				<span class="red">complete steps 4-6</span>
				to gain <span class="green">full access</span> to the server:
			</li>
			<li>
				Read the ENTIRE <span class="purple">#👋welcome</span> channel message including the
				<span class="yellow">Code of Conduct</span>. If english is not your first language, we have
				several
				<span class="red">translations</span>
				of the <span class="purple">#👋welcome</span> channel message and the
				<span class="yellow">Code of Conduct</span>
				available
				<a
					href="https://github.com/CodingGarden/discord-welcome-code-of-conduct/"
					target="_blank"
					rel="noopener">here</a
				>.
			</li>
			<li>
				After you have read the <span class="yellow">Code of Conduct</span> in the
				<span class="purple">#👋welcome</span>
				channel you will need to add an <span class="red">emoji reaction</span> to acknowledge that
				you will abide by the <span class="yellow">Code of Conduct</span>.
			</li>
			<li>
				After that, you will need to send an introduction in the <span class="purple"
					>#🗣introductions</span
				>
				channel. Your introduction must be at least
				<span class="red">40 characters long</span>, but it can be anything you'd like us to know
				about you. Here are some questions to help you write your introduction message, (but you
				really can write anything!):
				<ul class="small">
					<li>
						What do you do? How long have you been coding? What's your favorite programming
						language? How did you find Coding Garden? What is your favorite thing about programming?
						What hobbies do you have? What's your favorite food? Do you have any pets?
					</li>
				</ul>
			</li>
			<li>
				After you have completed <span class="red">steps 4-6</span>,
				<span class="yellow">CG-BOT</span>
				will automatically add you to the seedling role and you will have
				<span class="green">full access</span>
				to the server! <span class="green">Congrats! 🎉🎉</span> Feel free to poke around. If you
				need help with something, be sure to read the
				<span class="yellow">#📝read-first</span> channel before posting a question.
			</li>
		</ol>
		<center>
			<a class="button" on:click={() => join()} id="join-button" target="_blank" rel="noopener"
				>{buttonMessage}</a
			>
		</center>
	</div>
</div>

<style>
	.center {
		text-align: center;
	}

	.logo {
		display: block;
		margin: 0 auto;
		width: 200px;
	}

	.instructions {
		padding: 1rem;
		max-width: 800px;
		margin: 0 auto;
		margin-bottom: 5rem;
	}

	.green {
		color: #6a9e3b;
	}

	.red {
		color: #ef3e36;
	}

	.purple {
		color: #cb48b7;
	}

	.yellow {
		color: #ffa630;
	}

	.small {
		font-size: 1.5rem;
	}

	a.button {
		display: inline-block;
		padding: 0.35em 1.2em;
		border: 0.1em solid #ffffff;
		margin: 0 0.3em 0.3em 0;
		border-radius: 0.12em;
		box-sizing: border-box;
		text-decoration: none;
		color: #ffffff;
		text-align: center;
		transition: all 0.2s;
		cursor: pointer;
	}

	a.button:hover {
		color: #000000;
		background-color: #ffffff;
	}

	@media all and (max-width: 30em) {
		a.button {
			display: block;
			margin: 0.4em auto;
		}
	}

	li {
		margin: 0.5rem 0;
	}
</style>
