import { css } from 'glamor';
import tinycolor from 'tinycolor2';

// export function threeDTextEm(color, depth) {
// 	let style = "";
// 	let shadowColor = tinycolor(color);
// 	for (let i = 1; i <= depth; i++) {
// 		let outputColor = tinycolor(color).toString();

// 		let comma = i < depth ? ',' : '';
// 		style += ` ${i}px ${i}px 0px ${outputColor}${comma}`;
// 	}

// 	return style;
// }

export function threeDText(color, depth) {
	let style = "";
	// let shadowColor = tinycolor(color);
	for (let i = 1; i <= depth; i++) {
		let outputColor = tinycolor(color).toString();

		let comma = i < depth ? ',' : '';
		style += ` ${i}px ${i}px 0px ${outputColor}${comma}`;
	}

	return style;
}

export function bgBorder(color, width, show = true) {
	return css({
		backgroundImage: `linear-gradient(to left, ${color} 0%, ${color} 100%), linear-gradient(to left, ${color} 0%, ${color} 100%), linear-gradient(to left, ${color} 0%, ${color} 100%), linear-gradient(to left, ${color} 0%, ${color} 100%)`,
		backgroundPosition: `0 0, 100% 0, 100% 100%, 0 100%`,
		backgroundRepeat: `no-repeat`,
		backgroundSize: show ? `100% ${width}, ${width} 100%, 100% ${width}, ${width} 100%` : `100% 0, 0 100%, 100% 0, 0 100%`
	});
}

export function bgBorderShow(width) {
	return css({
    	backgroundSize: `100% ${width}, ${width} 100%, 100% ${width}, ${width} 100%`
	});
}

export function mq(breakpoint, styles) {
	let threshold = 0;
	if (breakpoint === "small") {
		threshold = 0;
	}
	if (breakpoint === "medium") {
		threshold = 640;
	}
	if (breakpoint === "large") {
		threshold = 1024;
	}
	if (breakpoint === "xlarge") {
		threshold = 1200;
	}
	if (breakpoint === "xxlarge") {
		threshold = 1440;
	}
	return `@media screen and (min-width: ${threshold}px)`;
}
