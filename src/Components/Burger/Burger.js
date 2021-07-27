import React, { useState } from "react";
import "./Burger.css";

function Burger({ setOpen }) {
	const openMenu = () => {
		setOpen(true);
	};

	return (
		<div className="burger" onClick={openMenu}>
			&#9776;
		</div>
	);
}

export default Burger;
