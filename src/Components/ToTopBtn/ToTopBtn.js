import React from "react";
import "./ToTopBtn.css";

function ToTopBtn() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="top" onClick={scrollToTop}>
			&#8673;
		</div>
	);
}

export default ToTopBtn;
