const proverbs = [
    {
        "chapter": 10,
        "verse": 1,
        "beginning": "A wise son makes a glad father;",
        "ending": "but a foolish son brings grief to his mother."
    },
    {
        "chapter": 10,
        "verse": 2,
        "beginning": "Treasures of wickedness profit nothing,",
        "ending": "but righteousness delivers from death."
    },
    {
        "chapter": 10,
        "verse": 3,
        "beginning": "Yahweh will not allow the soul of the righteous to go hungry,",
        "ending": "but he thrusts away the desire of the wicked."
    },
    {
        "chapter": 10,
        "verse": 4,
        "beginning": "He becomes poor who works with a lazy hand,",
        "ending": "but the hand of the diligent brings wealth."
    },
    {
        "chapter": 10,
        "verse": 5,
        "beginning": "He who gathers in summer is a wise son,",
        "ending": "but he who sleeps during the harvest is a son who causes shame."
    },
    {
        "chapter": 10,
        "verse": 6,
        "beginning": "Blessings are on the head of the righteous,",
        "ending": "but violence covers the mouth of the wicked."
    },
    {
        "chapter": 10,
        "verse": 7,
        "beginning": "The memory of the righteous is blessed,",
        "ending": "but the name of the wicked will rot."
    },
    {
        "chapter": 10,
        "verse": 8,
        "beginning": "The wise in heart accept commandments,",
        "ending": "but a chattering fool will fall."
    },
    {
        "chapter": 10,
        "verse": 9,
        "beginning": "He who walks blamelessly walks surely,",
        "ending": "but he who perverts his ways will be found out."
    },
    {
        "chapter": 10,
        "verse": 10,
        "beginning": "One who winks with the eye causes sorrow,",
        "ending": "but a chattering fool will fall."
    },
    {
        "chapter": 10,
        "verse": 11,
        "beginning": "The mouth of the righteous is a spring of life,",
        "ending": "but violence covers the mouth of the wicked."
    },
    {
        "chapter": 10,
        "verse": 12,
        "beginning": "Hatred stirs up strife,",
        "ending": "but love covers all wrongs."
    },
    {
        "chapter": 10,
        "verse": 13,
        "beginning": "Wisdom is found on the lips of him who has discernment,",
        "ending": "but a rod is for the back of him who is void of understanding."
    },
    {
        "chapter": 10,
        "verse": 14,
        "beginning": "Wise men lay up knowledge,",
        "ending": "but the mouth of the foolish is near ruin."
    },
    {
        "chapter": 10,
        "verse": 15,
        "beginning": "The rich man's wealth is his strong city.",
        "ending": "The destruction of the poor is their poverty."
    },
    {
        "chapter": 10,
        "verse": 16,
        "beginning": "The labor of the righteous leads to life.",
        "ending": "The increase of the wicked leads to sin."
    },
    {
        "chapter": 10,
        "verse": 17,
        "beginning": "He is in the way of life who heeds correction,",
        "ending": "but he who forsakes reproof leads others astray."
    },
    {
        "chapter": 10,
        "verse": 18,
        "beginning": "He who hides hatred has lying lips.",
        "ending": "He who utters a slander is a fool."
    },
    {
        "chapter": 10,
        "verse": 19,
        "beginning": "In the multitude of words there is no lack of disobedience,",
        "ending": "but he who restrains his lips does wisely."
    },
    {
        "chapter": 10,
        "verse": 20,
        "beginning": "The tongue of the righteous is like choice silver.",
        "ending": "The heart of the wicked is of little worth."
    },
    {
        "chapter": 10,
        "verse": 21,
        "beginning": "The lips of the righteous feed many,",
        "ending": "but the foolish die for lack of understanding."
    },
    {
        "chapter": 10,
        "verse": 22,
        "beginning": "Yahweh's blessing brings wealth,",
        "ending": "and he adds no trouble to it."
    },
    {
        "chapter": 10,
        "verse": 23,
        "beginning": "It is a fool's pleasure to do wickedness,",
        "ending": "but wisdom is a man of understanding's pleasure."
    },
    {
        "chapter": 10,
        "verse": 24,
        "beginning": "What the wicked fear will overtake them,",
        "ending": "but the desire of the righteous will be granted."
    },
    {
        "chapter": 10,
        "verse": 25,
        "beginning": "When the whirlwind passes, the wicked is no more;",
        "ending": "but the righteous stand firm forever."
    },
    {
        "chapter": 10,
        "verse": 26,
        "beginning": "As vinegar to the teeth, and as smoke to the eyes,",
        "ending": "so is the sluggard to those who send him."
    },
    {
        "chapter": 10,
        "verse": 27,
        "beginning": "The fear of Yahweh prolongs days,",
        "ending": "but the years of the wicked shall be shortened."
    },
    {
        "chapter": 10,
        "verse": 28,
        "beginning": "The prospect of the righteous is joy,",
        "ending": "but the hope of the wicked will perish."
    },
    {
        "chapter": 10,
        "verse": 29,
        "beginning": "The way of Yahweh is a stronghold to the upright,",
        "ending": "but it is a destruction to the workers of iniquity."
    },
    {
        "chapter": 10,
        "verse": 30,
        "beginning": "The righteous will never be removed,",
        "ending": "but the wicked will not dwell in the land."
    },
    {
        "chapter": 10,
        "verse": 31,
        "beginning": "The mouth of the righteous produces wisdom,",
        "ending": "but the perverse tongue will be cut off."
    },
    {
        "chapter": 10,
        "verse": 32,
        "beginning": "The lips of the righteous know what is acceptable,",
        "ending": "but the mouth of the wicked is perverse."
    },
    {
        "chapter": 18,
        "verse": 1,
        "beginning": "A man who isolates himself pursues selfishness,",
        "ending": "and defies all sound judgment."
    },
    {
        "chapter": 18,
        "verse": 2,
        "beginning": "A fool has no delight in understanding,",
        "ending": "but only in revealing his own opinion."
    },
    {
        "chapter": 18,
        "verse": 3,
        "beginning": "When wickedness comes, contempt also comes,",
        "ending": "and with shame comes disgrace."
    },
    {
        "chapter": 18,
        "verse": 4,
        "beginning": "The words of a man's mouth are like deep waters.",
        "ending": "The fountain of wisdom is like a flowing brook."
    },
    {
        "chapter": 18,
        "verse": 5,
        "beginning": "To be partial to the faces of the wicked is not good,",
        "ending": "nor to deprive the innocent of justice."
    },
    {
        "chapter": 18,
        "verse": 6,
        "beginning": "A fool's lips come into strife,",
        "ending": "and his mouth invites beatings."
    },
    {
        "chapter": 18,
        "verse": 7,
        "beginning": "A fool's mouth is his destruction,",
        "ending": "and his lips are a snare to his soul."
    },
    {
        "chapter": 18,
        "verse": 8,
        "beginning": "The words of a gossip are like dainty morsels:",
        "ending": "they go down into a person's innermost parts."
    },
    {
        "chapter": 18,
        "verse": 9,
        "beginning": "One who is slack in his work",
        "ending": "is brother to him who is a master of destruction."
    },
    {
        "chapter": 18,
        "verse": 10,
        "beginning": "Yahweh's name is a strong tower:",
        "ending": "the righteous run to him, and are safe."
    },
    {
        "chapter": 18,
        "verse": 11,
        "beginning": "The rich man's wealth is his strong city,",
        "ending": "like an unscalable wall in his own imagination."
    },
    {
        "chapter": 18,
        "verse": 12,
        "beginning": "Before destruction the heart of man is proud,",
        "ending": "but before honor is humility."
    },
    {
        "chapter": 18,
        "verse": 13,
        "beginning": "He who answers before he hears,",
        "ending": "that is folly and shame to him."
    },
    {
        "chapter": 18,
        "verse": 14,
        "beginning": "A man's spirit will sustain him in sickness,",
        "ending": "but a crushed spirit, who can bear?"
    },
    {
        "chapter": 18,
        "verse": 15,
        "beginning": "The heart of the discerning gets knowledge.",
        "ending": "The ear of the wise seeks knowledge."
    },
    {
        "chapter": 18,
        "verse": 16,
        "beginning": "A man's gift makes room for him,",
        "ending": "and brings him before great men."
    },
    {
        "chapter": 18,
        "verse": 17,
        "beginning": "He who pleads his cause first seems right",
        "ending": "until another comes and questions him."
    },
    {
        "chapter": 18,
        "verse": 18,
        "beginning": "The lot settles disputes,",
        "ending": "and keeps strong ones apart."
    },
    {
        "chapter": 18,
        "verse": 19,
        "beginning": "A brother offended is more difficult than a fortified city.",
        "ending": "Disputes are like the bars of a fortress."
    },
    {
        "chapter": 18,
        "verse": 20,
        "beginning": "A man's stomach is filled with the fruit of his mouth.",
        "ending": "With the harvest of his lips he is satisfied."
    },
    {
        "chapter": 18,
        "verse": 21,
        "beginning": "Death and life are in the power of the tongue;",
        "ending": "those who love it will eat its fruit."
    },
    {
        "chapter": 18,
        "verse": 22,
        "beginning": "Whoever finds a wife finds a good thing,",
        "ending": "and obtains favor of Yahweh."
    },
    {
        "chapter": 18,
        "verse": 23,
        "beginning": "The poor plead for mercy,",
        "ending": "but the rich answer harshly."
    },
    {
        "chapter": 18,
        "verse": 24,
        "beginning": "A man of many companions may be ruined,",
        "ending": "but there is a friend who sticks closer than a brother."
    },
    {
        "chapter": 20,
        "verse": 1,
        "beginning": "Wine is a mocker and beer is a brawler.",
        "ending": "Whoever is led astray by them is not wise."
    },
    {
        "chapter": 20,
        "verse": 2,
        "beginning": "The terror of a king is like the roaring of a lion.",
        "ending": "He who provokes him to anger forfeits his own life."
    },
    {
        "chapter": 20,
        "verse": 3,
        "beginning": "It is an honor for a man to keep aloof from strife,",
        "ending": "but every fool will be quarreling."
    },
    {
        "chapter": 20,
        "verse": 4,
        "beginning": "The sluggard will not plow by reason of the winter;",
        "ending": "therefore he shall beg in harvest, and have nothing."
    },
    {
        "chapter": 20,
        "verse": 5,
        "beginning": "Counsel in the heart of man is like deep water,",
        "ending": "but a man of understanding will draw it out."
    },
    {
        "chapter": 20,
        "verse": 6,
        "beginning": "Many men claim to be men of unfailing love,",
        "ending": "but who can find a faithful man?"
    },
    {
        "chapter": 20,
        "verse": 7,
        "beginning": "A righteous man walks in integrity.",
        "ending": "Blessed are his children after him."
    },
    {
        "chapter": 20,
        "verse": 8,
        "beginning": "A king who sits on the throne of judgment",
        "ending": "scatters away all evil with his eyes."
    },
    {
        "chapter": 20,
        "verse": 9,
        "beginning": "Who can say, \"I have made my heart pure.",
        "ending": "I am clean and without sin\"?"
    },
    {
        "chapter": 20,
        "verse": 10,
        "beginning": "Differing weights and differing measures,",
        "ending": "both of them alike are an abomination to Yahweh."
    },
    {
        "chapter": 20,
        "verse": 11,
        "beginning": "Even a child makes himself known by his doings,",
        "ending": "whether his work is pure, and whether it is right."
    },
    {
        "chapter": 20,
        "verse": 12,
        "beginning": "The hearing ear, and the seeing eye,",
        "ending": "Yahweh has made even both of them."
    },
    {
        "chapter": 20,
        "verse": 13,
        "beginning": "Don't love sleep, lest you come to poverty.",
        "ending": "Open your eyes, and you shall be satisfied with bread."
    },
    {
        "chapter": 20,
        "verse": 14,
        "beginning": "\"It's no good, it's no good,\" says the buyer;",
        "ending": "but when he is gone his way, then he boasts."
    },
    {
        "chapter": 20,
        "verse": 15,
        "beginning": "There is gold and abundance of rubies,",
        "ending": "but the lips of knowledge are a rare jewel."
    },
    {
        "chapter": 20,
        "verse": 16,
        "beginning": "Take the garment of one who puts up collateral for a stranger;",
        "ending": "and hold him in pledge for a wayward woman."
    },
    {
        "chapter": 20,
        "verse": 17,
        "beginning": "Fraudulent food is sweet to a man,",
        "ending": "but afterwards his mouth is filled with gravel."
    },
    {
        "chapter": 20,
        "verse": 18,
        "beginning": "Plans are established by advice;",
        "ending": "by wise guidance you wage war!"
    },
    {
        "chapter": 20,
        "verse": 19,
        "beginning": "He who goes about as a tale-bearer reveals secrets;",
        "ending": "therefore don't keep company with him who opens wide his lips."
    },
    {
        "chapter": 20,
        "verse": 20,
        "beginning": "Whoever curses his father or his mother,",
        "ending": "his lamp shall be put out in blackness of darkness."
    },
    {
        "chapter": 20,
        "verse": 21,
        "beginning": "An inheritance quickly gained at the beginning",
        "ending": "won't be blessed in the end."
    },
    {
        "chapter": 20,
        "verse": 22,
        "beginning": "Don't say, \"I will pay back evil.\"",
        "ending": "Wait for Yahweh, and he will save you."
    },
    {
        "chapter": 20,
        "verse": 23,
        "beginning": "Yahweh detests differing weights,",
        "ending": "and dishonest scales are not pleasing."
    },
    {
        "chapter": 20,
        "verse": 24,
        "beginning": "A man's steps are from Yahweh;",
        "ending": "how then can man understand his way?"
    },
    {
        "chapter": 20,
        "verse": 25,
        "beginning": "It is a snare to a man to make a rash dedication,",
        "ending": "then later to consider his vows."
    },
    {
        "chapter": 20,
        "verse": 26,
        "beginning": "A wise king winnows out the wicked,",
        "ending": "and drives the threshing wheel over them."
    },
    {
        "chapter": 20,
        "verse": 27,
        "beginning": "The spirit of man is Yahweh's lamp,",
        "ending": "searching all his innermost parts."
    },
    {
        "chapter": 20,
        "verse": 28,
        "beginning": "Love and faithfulness keep the king safe.",
        "ending": "His throne is sustained by love."
    },
    {
        "chapter": 20,
        "verse": 29,
        "beginning": "The glory of young men is their strength.",
        "ending": "The splendor of old men is their gray hair."
    },
    {
        "chapter": 20,
        "verse": 30,
        "beginning": "Wounding blows cleanse away evil,",
        "ending": "and beatings purge the innermost parts."
    }
]

// globals 😅
let flippedCards = [];
let matchedPairs = 0;
let matchCount = 0;
let score = 0;

function getRandomElements(arr, numElements) {
    // Create a copy of the array to avoid mutating the original
    let shuffledArray = arr.slice();
    
    // Shuffle the array using the Fisher-Yates algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    // Return the first `numElements` from the shuffled array
    return shuffledArray.slice(0, numElements);
}

function removeNonAlphabeticEnd(str) {
    // Check if the last character is not an alphabetic character
    if (str && !/[a-zA-Z]/.test(str.charAt(str.length - 1))) {
        // Remove the last character
        str = str.slice(0, -1);
    }
    return str;
}

function createCard(text, id, proverb) {
    const card = document.createElement('div');
    card.id = id
    card.classList.add('card');
    card.dataset.type = id;

    const content = document.createElement('div');
    content.classList.add('content');

    const p = document.createElement('p');
    p.textContent = removeNonAlphabeticEnd(text);

    const reference = document.createElement('div');
    reference.innerText = `${proverb.chapter}:${proverb.verse}`
    reference.classList.add('reference')

    content.appendChild(p);
    card.addEventListener('click', onCardClicked);
    card.appendChild(content);
    card.appendChild(reference);
    return card;
}

function onCardClicked(event) {
    const clickedCard = event.currentTarget;

    if (flippedCards.length < 2 && !clickedCard.classList.contains('flipped')) {
        clickedCard.classList.add('flipped');
        flippedCards.push(clickedCard);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.type === card2.dataset.type) {
        // update globals
        matchedPairs++;
        score++;
        flippedCards = [];
        
        // update the score count
        const scoreCounter = document.getElementById('score-counter')
        scoreCounter.classList.remove('hidden')
        scoreCounter.innerText = score;

        // show reference
        const ref1 = card1.querySelector('.reference');
        const ref2 = card2.querySelector('.reference');
        ref1.classList.add('appear')
        ref2.classList.add('appear')

        if (matchedPairs === matchCount) {
            setTimeout(() => {
                reInitializeGameBoard();
            }, 1000);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 500);
    }
}

function initializeGameBoard() {
    flippedCards = []
    matchedPairs = 0
    matchCount = Math.min(matchCount+1, 3)

    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    const cards = [];
    const selectedProverbs = getRandomElements(proverbs, matchCount)
    selectedProverbs.forEach((proverb, index) => {
        cards.push(createCard(proverb.beginning, index, proverb));
        cards.push(createCard(proverb.ending, index, proverb));
    });

    cards.sort(() => 0.5 - Math.random());
    cards.forEach(card => gameBoard.appendChild(card));
    cards.forEach(card => {
        card.classList.add('appear');
    });
}

initializeGameBoard();

function reInitializeGameBoard() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('appear')
        card.classList.add('fade-out');
    });
    
    // Wait for the animation to complete before reloading new cards
    setTimeout(() => {
        // Logic to reload new cards
        initializeGameBoard();
    }, 1000);
}

function closeTutorial() {
    document.getElementById('tutorial-overlay').classList.add('hidden');
}

// Show the tutorial on page load
window.onload = function() {
    document.getElementById('tutorial-overlay').classList.remove('hidden');
    setInterval(startExampleAnimation, 3000)
}

function startExampleAnimation() {
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const cursor = document.getElementById('cursor');

    function positionCursor(card) {
        const cardRect = card.getBoundingClientRect();
        cursor.style.top = `${cardRect.top + cardRect.height - 30}px`;
        cursor.style.left = `${cardRect.left + cardRect.width - 30}px`;
    }

    setTimeout(() => {
        cursor.classList.remove('hidden');
        positionCursor(card1)
        card1.classList.add('tap');
        card1.classList.add('flipped');
    }, 500);

    setTimeout(() => {
        positionCursor(card2)
    }, 1000)

    setTimeout(() => {
        card1.classList.remove('tap');
        card2.classList.add('tap');
        card2.classList.add('flipped');
    }, 1500);

    setTimeout(() => {
        card2.classList.remove('tap');    
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        cursor.classList.add('hidden');
        positionCursor(card1)
    }, 2500);
}

// TODO:
// 1. display reference
// 2. add more proverbs
// 3. different versions/ languages
