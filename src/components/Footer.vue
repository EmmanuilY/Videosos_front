<template>
<footer>
	<div class="footer-container">
		<div class="footer-section">
			<h4>About Us</h4>
			<p>We are a movie hosting website that allows you to watch your favorite movies anytime and anywhere!</p>
		</div>
		<div class="footer-section">
			<h4>Contact Us</h4>
			<ul>
				<li><a href="#">Email</a></li>
				<li><a href="#">Twitter</a></li>
				<li><a href="#">Facebook</a></li>
			</ul>
		</div>
		<div class="footer-section">
			<h4>Legal</h4>
			<ul>
				<li><a href="#">Terms of Use</a></li>
				<li><a href="#">Privacy Policy</a></li>
			</ul>
		</div>
	</div>
</footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
	background-color: #222;
	color: #fff;
	padding: 6vw 2vw;
  margin-top: 100px;

}

.footer-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	max-width: 1200px;
  max-height: 1200px;
	margin: 0 auto;
}

.footer-section {
	flex-basis: 30%;
	margin-bottom: 2vw;
}

.footer-section h4 {
	font-size: 2.5vw;
	margin-bottom: 1vw;
}

.footer-section ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

.footer-section ul li {
	margin-bottom: 0.5vw;
}

.footer-section ul li a {
	color: #fff;
	text-decoration: none;
	font-size: 1.5vw;
}

.footer-section ul li a:hover {
	color: #ccc;
}
</style>