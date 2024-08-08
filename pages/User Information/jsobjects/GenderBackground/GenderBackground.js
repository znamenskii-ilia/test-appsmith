export default {
	getBackground: (gender) => {
		if (gender == 'male') return "#42f587";
		else if (gender == 'female') return "#f5e942";
		else return "#f57b42";
	}
}
