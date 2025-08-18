// Daily motivational quotes for Project Glow Up
export interface MotivationalQuote {
	text: string;
	author: string;
	category: 'fitness' | 'mindset' | 'discipline' | 'progress' | 'strength' | 'perseverance';
}

export const motivationalQuotes: MotivationalQuote[] = [
	// Fitness & Health
	{ text: "Take care of your body. It's the only place you have to live.", author: "Jim Rohn", category: "fitness" },
	{ text: "The groundwork for all happiness is good health.", author: "Leigh Hunt", category: "fitness" },
	{ text: "Your body can do it. It's your mind you have to convince.", author: "Unknown", category: "fitness" },
	{ text: "Fitness is not about being better than someone else. It's about being better than you used to be.", author: "Khloe Kardashian", category: "fitness" },
	{ text: "The only bad workout is the one that didn't happen.", author: "Unknown", category: "fitness" },
	
	// Mindset & Mental Strength
	{ text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford", category: "mindset" },
	{ text: "The mind is everything. What you think you become.", author: "Buddha", category: "mindset" },
	{ text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: "mindset" },
	{ text: "Your limitation—it's only your imagination.", author: "Unknown", category: "mindset" },
	{ text: "Great things never come from comfort zones.", author: "Unknown", category: "mindset" },
	
	// Discipline & Consistency
	{ text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn", category: "discipline" },
	{ text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle", category: "discipline" },
	{ text: "The successful warrior is the average man with laser-like focus.", author: "Bruce Lee", category: "discipline" },
	{ text: "Discipline is choosing between what you want now and what you want most.", author: "Abraham Lincoln", category: "discipline" },
	{ text: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma", category: "discipline" },
	
	// Progress & Growth
	{ text: "Progress, not perfection.", author: "Unknown", category: "progress" },
	{ text: "Don't compare your beginning to someone else's middle.", author: "Jon Acuff", category: "progress" },
	{ text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.", author: "Alan Watts", category: "progress" },
	{ text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", category: "progress" },
	{ text: "A year from now you may wish you had started today.", author: "Karen Lamb", category: "progress" },
	
	// Strength & Resilience
	{ text: "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't.", author: "Rikki Rogers", category: "strength" },
	{ text: "You are stronger than you think and more capable than you imagine.", author: "Unknown", category: "strength" },
	{ text: "The strongest people are not those who show strength in front of us, but those who win battles we know nothing about.", author: "Unknown", category: "strength" },
	{ text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson", category: "strength" },
	{ text: "You have been assigned this mountain to show others it can be moved.", author: "Mel Robbins", category: "strength" },
	
	// Perseverance & Determination
	{ text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: "perseverance" },
	{ text: "Fall seven times, stand up eight.", author: "Japanese Proverb", category: "perseverance" },
	{ text: "The difference between ordinary and extraordinary is that little extra.", author: "Jimmy Johnson", category: "perseverance" },
	{ text: "Champions keep playing until they get it right.", author: "Billie Jean King", category: "perseverance" },
	{ text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "perseverance" },
	
	// Military/Discipline Specific
	{ text: "Embrace the suck. Growth happens in discomfort.", author: "Military Saying", category: "discipline" },
	{ text: "The more you sweat in training, the less you bleed in battle.", author: "Military Proverb", category: "discipline" },
	{ text: "Discipline equals freedom.", author: "Jocko Willink", category: "discipline" },
	{ text: "Get comfortable being uncomfortable.", author: "Jocko Willink", category: "strength" },
	{ text: "The path to success is to take massive, determined actions.", author: "Tony Robbins", category: "perseverance" },
	
	// Body Transformation Specific
	{ text: "Your body is your temple. Keep it pure and clean for the soul to reside in.", author: "B.K.S. Iyengar", category: "fitness" },
	{ text: "The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character.", author: "Arnold Schwarzenegger", category: "strength" },
	{ text: "Take care of your body. It's the only place you have to live.", author: "Jim Rohn", category: "fitness" },
	{ text: "A healthy outside starts from the inside.", author: "Robert Urich", category: "fitness" },
	{ text: "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.", author: "Buddha", category: "fitness" }
];

// Get quote of the day based on current date
export function getDailyQuote(): MotivationalQuote {
	const today = new Date();
	const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
	const quoteIndex = dayOfYear % motivationalQuotes.length;
	return motivationalQuotes[quoteIndex];
}

// Get random quote by category
export function getQuoteByCategory(category: MotivationalQuote['category']): MotivationalQuote {
	const categoryQuotes = motivationalQuotes.filter(quote => quote.category === category);
	const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
	return categoryQuotes[randomIndex];
}

// Get random quote
export function getRandomQuote(): MotivationalQuote {
	const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
	return motivationalQuotes[randomIndex];
}