App = React.createClass({
	render: function() {
		var styles = {
			margin: '0 auto',
			textAlign: 'center',
			width: '90%'
		};
		return (
			<div style={styles}>
				<h1>Search GIFs!</h1>
				<p>Find gif on <a href="http://giphy.com">giphy</a>. Press enter to download another gifs.</p>
				<Search />
				<Gif

					loading={this.state.loading}
					
					url={this.state.gif.url}
					
					sourceUrl={this.state.gif.sourceUrl}
				/>
			</div>
		);
	}
});