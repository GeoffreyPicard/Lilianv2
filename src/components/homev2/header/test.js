import React from 'react';

export const Logo = ({ color, width, height }) => (
	<svg
		fill={color}
		height={height}
		version="1.1"
		viewBox="0 0 32 32"
		width={width}
		viewBox="0 0 472 200"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>Logo</title>
		<g id="Page-1" stroke="none" fill="none">
			<polygon id="Path" fill="#000000" points="0 199.578125 286 199.578125 143 53.578125" />
			<path d="" id="Path-2" stroke="#979797" />
			<polygon
				id="Path-3"
				fill="#000000"
				points="317.3125 198.578125 178.179688 60.828125 236.976562 0.57421875 450.226562 198.078125"
			/>
		</g>
	</svg>
);

export const Menu = ({ color, width, height }) => (
	<svg
		fill={color}
		height={height}
		width={width}
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
	>
		<title>Menu</title>
		<path d="M0 4.8h32v4.429h-32v-4.429zM0 13.871h32v4.429h-32v-4.429zM0 22.943h32v4.429h-32v-4.429z" />
	</svg>
);
