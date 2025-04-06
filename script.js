function calculateNumbers(event) {
    event.preventDefault();

    // Get the user's full name
    let fullName = document.getElementById("nameInput").value.toUpperCase().replace(/[^A-Z]/g, "");

    // Pythagorean numerology mapping
    const letterValues = {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
        'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
        'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    };

    // Calculate Expression Number (all letters)
    let expressionTotal = 0;
    for (let i = 0; i < fullName.length; i++) {
        expressionTotal += letterValues[fullName[i]] || 0;
    }

    // Reduce Expression Number, preserving master numbers 11, 22, 33
    let expressionNumber = expressionTotal;
    while (expressionNumber > 9 && expressionNumber !== 11 && expressionNumber !== 22 && expressionNumber !== 33) {
        expressionNumber = String(expressionNumber).split("").reduce((sum, digit) => sum + Number(digit), 0);
    }

    // Calculate Soul Urge Number (vowels only: A, E, I, O, U, and Y if it acts as a vowel)
    let soulUrgeTotal = 0;
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    for (let i = 0; i < fullName.length; i++) {
        let letter = fullName[i];
        let isYVowel = letter === 'Y' && (i === fullName.length - 1 || !vowels.includes(fullName[i + 1]));
        if (vowels.includes(letter) || isYVowel) {
            soulUrgeTotal += letterValues[letter];
        }
    }

    // Reduce Soul Urge Number, preserving master numbers 11, 22, 33
    let soulUrgeNumber = soulUrgeTotal;
    while (soulUrgeNumber > 9 && soulUrgeNumber !== 11 && soulUrgeNumber !== 22 && soulUrgeNumber !== 33) {
        soulUrgeNumber = String(soulUrgeNumber).split("").reduce((sum, digit) => sum + Number(digit), 0);
    }

    // Interpretations for Expression Number
    const expressionInterpretations = {
        1: "You are a natural leader with a strong drive to achieve your goals. Independence and innovation are your strengths.",
        2: "You are a peacemaker, sensitive and intuitive, with a talent for cooperation and diplomacy.",
        3: "You are creative and expressive, with a love for communication, art, and social connections.",
        4: "You are practical and hardworking, with a strong sense of structure, discipline, and reliability.",
        5: "You are adventurous and freedom-loving, always seeking new experiences and embracing change.",
        6: "You are nurturing and responsible, with a deep love for family, community, and harmony.",
        7: "You are a seeker of truth, with a deep, analytical mind and a spiritual, introspective nature.",
        8: "You are ambitious and powerful, with a talent for business, leadership, and material success.",
        9: "You are a humanitarian, compassionate and idealistic, with a desire to help others and make a difference.",
        11: "You are the Master Intuitive, a visionary with heightened intuition and spiritual insight. You inspire others with your ideals.",
        22: "You are The Master Builder, capable of turning big dreams into reality. You have the power to create lasting impact.",
        33: "You are The Master Teacher, a rare soul driven by selflessness, compassion, and a mission to uplift others through love and service."
    };

    // Interpretations for Soul Urge Number
    const soulUrgeInterpretations = {
        1: "Your heart craves independence and leadership. You desire to stand out and forge your own path.",
        2: "You yearn for harmony, love, and connection. Your soul seeks peace and emotional intimacy.",
        3: "Your inner desire is to express yourself creatively. You long for joy, beauty, and social interaction.",
        4: "You desire stability and structure. Your soul seeks security and a sense of order.",
        5: "Your heart craves freedom and adventure. You long for variety, excitement, and new experiences.",
        6: "Your soul desires love, family, and responsibility. You yearn to nurture and care for others.",
        7: "You seek spiritual and intellectual growth. Your soul desires truth, wisdom, and inner understanding.",
        8: "Your heart craves power and success. You desire recognition, achievement, and material abundance.",
        9: "Your soul yearns to serve humanity. You desire to make a difference and live with compassion and idealism.",
        11: "As the Master Intuitive, your soul craves spiritual awakening and enlightenment. You desire to inspire and uplift others.",
        22: "As The Master Builder, your heart desires to create something monumental. You yearn to manifest your grand visions.",
        33: "As The Master Teacher, your soul seeks to heal and teach. You desire to spread love, compassion, and wisdom to the world"
    };

    // Display the results
    const resultText = document.getElementById("resultText");
    resultText.innerHTML = `<strong>Your Expression Number is ${expressionNumber}:</strong> ${expressionInterpretations[expressionNumber]}<br><br>` +
                           `<strong>Your Soul Urge Number is ${soulUrgeNumber}:</strong> ${soulUrgeInterpretations[soulUrgeNumber]}`;

    // Trigger the parchment unrolling animation
    const parchment = document.getElementById("resultContainer");
    parchment.classList.add("open");
}