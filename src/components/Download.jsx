import React from "react";

import styles from "../styles/Global";
import assets from "../assets";

const Download = () => {
	return (
		<div className={`${styles.section} ${styles.bgWhite}`}>
			<div className={`${styles.subSection} flex-col text-center`}>
				<div>
					<h1 className={`${styles.h1Text} ${styles.blackText}`}>
						Download the Source Code
					</h1>
					<p className={`${styles.pText} ${styles.blackText}`}>
						Get the full source code on GitHub
					</p>
				</div>
				<button
					onClick={() => {
						window.open(
							"https://github.com/fabricioOak/nft-marketplace-react-native",
							"_blank"
						);
					}}
					className={`${styles.btnPrimary}`}
				>
					Source Code
				</button>
				<div className={`${styles.flexCenter}`}>
					<img
						className={styles.fullImg}
						src={assets.scene}
						alt="download-png"
					/>
				</div>
			</div>
		</div>
	);
};

export default Download;
