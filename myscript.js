function showCircle() {
    document.getElementById("circle").style.display = "block";
}

function hideCircle() {
    document.getElementById("circle").style.display = "none";
}

function teamActive(element) {
    element.classList.add("tcard-active"); 
    element.children[3].src = "images/Waves.png";
}

function teamUsual(element) {
    element.classList.remove("tcard-active"); 
    element.children[3].src = "images/Waves (1).png";
}

function blogHover(element) {
    element.classList.add("blog-hover");
}

function blogUsual(element) {
    element.classList.remove("blog-hover");
}

function changeBoardImage(element) {
	let imgTabs = element.parentNode.getElementsByClassName("img-tab");
	for (i = 0; i < imgTabs.length; i++) {
		imgTabs[i].classList.remove("img-tab-active"); 
	}
	element.parentNode.parentNode.getElementsByClassName("board")[0].src = element.src;
	element.classList.add("img-tab-active");
}

function changeTab(element, contentName) {
	let tabs = element.parentNode.getElementsByTagName("a");
	for (i = 0; i < tabs.length; i++) {
		tabs[i].classList.remove("active"); 
	}
	let content = element.parentNode.parentNode.getElementsByClassName("tab-content")[0].getElementsByTagName("p");
	for (i = 0; i < content.length; i++) {
		content[i].classList.remove("tab-content-show"); 
	}
	let contentShow = element.parentNode.parentNode.getElementsByClassName("tab-content")[0].getElementsByClassName(contentName);
	for (i = 0; i < contentShow.length; i++) {
		contentShow[i].classList.add("tab-content-show"); 
	}
	element.classList.add("active");
}

function nextSlide() {
	let currentSlide = document.getElementById("counter").innerHTML[0];
	document.getElementsByClassName("slide-show")[0].classList.remove("slide-show");
	if (currentSlide == 5) {
		document.getElementById("counter").innerHTML = 1 + "/5";
		document.getElementsByClassName("slide1")[0].classList.add("slide-show");
	} else {
		document.getElementById("counter").innerHTML = (parseInt(currentSlide) + 1) + "/5";
		document.getElementsByClassName("slide" + ((parseInt(currentSlide) + 1)))[0].classList.add("slide-show");
	}
}

function prevSlide() {
	let currentSlide = document.getElementById("counter").innerHTML[0];
	document.getElementsByClassName("slide-show")[0].classList.remove("slide-show");
	if (currentSlide == 1) {
		document.getElementById("counter").innerHTML = 5 + "/5";
		document.getElementsByClassName("slide5")[0].classList.add("slide-show");
	} else {
		document.getElementById("counter").innerHTML = (parseInt(currentSlide) - 1) + "/5";
		document.getElementsByClassName("slide" + ((parseInt(currentSlide) - 1)))[0].classList.add("slide-show");
	}
}

function videoPlay() {
	document.getElementsByClassName("video-poster")[0].style.display = "none";
	// document.getElementsByClassName("ratio-content")[0].innerHTML = '<iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/B0i_ryWN3UU?autoplay=1&start=8&end=777&loop=1&playlist=B0i_ryWN3UU&mute=1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" frameborder="0" allowfullscreen></iframe>';
}