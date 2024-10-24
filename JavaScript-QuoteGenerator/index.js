const quotes = [
    "If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.",
    "Learn the rules like a pro, so you can break them like an artist.",
    "Even if you are on the right track, you'll get run over if you just sit there.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Strength does not come from physical capacity. It comes from an indomitable will.",
    "The leader has to be practical and a realist yet must talk the language of the visionary and the idealist.",
    "The pessimist complains about the wind. The optimist expects it to change. The leader adjusts the sails.",
    "I can do things you cannot, you can do things I cannot: together we can do great things."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}