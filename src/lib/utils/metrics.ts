// Color and status functions for health metrics based on military standards for 37-year-old male

export function getMetricColor(metric: string, value: number): string {
	switch (metric) {
		case 'bmi':
			if (value >= 22 && value <= 23) return 'text-blue-400';
			if (value >= 18.5 && value <= 24.9) return 'text-green-400';
			if (value >= 25 && value <= 29.9) return 'text-yellow-400';
			return 'text-red-400';

		case 'bodyFat':
			if (value >= 8 && value <= 11) return 'text-blue-400';
			if (value >= 12 && value <= 19) return 'text-green-400';
			if (value >= 20 && value <= 25) return 'text-yellow-400';
			return 'text-red-400';

		case 'visceralFat':
			if (value <= 4) return 'text-blue-400';
			if (value >= 5 && value <= 9) return 'text-green-400';
			if (value >= 10 && value <= 15) return 'text-yellow-400';
			return 'text-red-400';

		case 'bodyWater':
			if (value >= 61) return 'text-blue-400';
			if (value >= 55 && value <= 60) return 'text-green-400';
			if (value >= 50 && value <= 54) return 'text-yellow-400';
			return 'text-red-400';

		case 'skeletalMuscle':
			if (value >= 41) return 'text-blue-400';
			if (value >= 35 && value <= 40) return 'text-green-400';
			if (value >= 30 && value <= 34) return 'text-yellow-400';
			return 'text-red-400';

		case 'protein':
			if (value >= 18) return 'text-blue-400';
			if (value >= 16 && value <= 17) return 'text-green-400';
			if (value >= 14 && value <= 15) return 'text-yellow-400';
			return 'text-red-400';

		case 'metabolicAge':
			if (value < 37) return 'text-blue-400';
			if (value >= 37 && value <= 41) return 'text-green-400';
			if (value >= 42 && value <= 46) return 'text-yellow-400';
			return 'text-red-400';

		case 'bmr':
			// Approximate BMR for 37-year-old male: 1600-1800 calories
			if (value >= 1750) return 'text-blue-400';
			if (value >= 1600 && value < 1750) return 'text-green-400';
			if (value >= 1400 && value < 1600) return 'text-yellow-400';
			return 'text-red-400';

		default:
			return 'text-base-content';
	}
}

export function getMetricStatus(metric: string, value: number): string {
	switch (metric) {
		case 'bmi':
			if (value >= 22 && value <= 23) return 'Optimal';
			if (value >= 18.5 && value <= 24.9) return 'Normal';
			if (value >= 25 && value <= 29.9) return 'Overweight';
			return value >= 30 ? 'Obese' : 'Underweight';

		case 'bodyFat':
			if (value >= 8 && value <= 11) return 'Optimal';
			if (value >= 12 && value <= 19) return 'Good';
			if (value >= 20 && value <= 25) return 'Fair';
			return 'High';

		case 'visceralFat':
			if (value <= 4) return 'Excellent';
			if (value >= 5 && value <= 9) return 'Good';
			if (value >= 10 && value <= 15) return 'Fair';
			return 'High';

		case 'bodyWater':
			if (value >= 61) return 'Excellent';
			if (value >= 55 && value <= 60) return 'Good';
			if (value >= 50 && value <= 54) return 'Fair';
			return 'Low';

		case 'skeletalMuscle':
			if (value >= 41) return 'Excellent';
			if (value >= 35 && value <= 40) return 'Good';
			if (value >= 30 && value <= 34) return 'Fair';
			return 'Low';

		case 'protein':
			if (value >= 18) return 'Optimal';
			if (value >= 16 && value <= 17) return 'Good';
			if (value >= 14 && value <= 15) return 'Fair';
			return 'Low';

		case 'metabolicAge':
			if (value < 37) return 'Younger';
			if (value >= 37 && value <= 41) return 'Normal';
			if (value >= 42 && value <= 46) return 'Slightly Older';
			return 'Much Older';

		case 'bmr':
			if (value >= 1750) return 'High';
			if (value >= 1600) return 'Normal';
			if (value >= 1400) return 'Low';
			return 'Very Low';

		case 'weight':
			return 'lbs';

		case 'fatFreeBodyWeight':
			return 'lbs';

		case 'subcutaneousFat':
			return '%';

		case 'muscleMass':
			return 'lbs';

		case 'boneMass':
			return 'lbs';

		default:
			return 'Normal';
	}
}