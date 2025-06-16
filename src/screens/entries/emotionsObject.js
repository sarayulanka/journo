const emotionsObject = {
  VeryUnpleasant: {
    "Inferior": [
      "What strengths do you possess that others might admire?",
      "Can you think of a time when you overcame a challenge?",
      "What are some small successes you've had recently?",
      "How have you grown or improved over time?",
      "Who in your life values you for who you are?"
    ],
    "Isolated": [
      "Who in your life makes you feel connected and supported?",
      "What moments have brought you comfort in the past?",
      "What do you enjoy doing on your own that brings you peace?",
      "When have you felt truly understood by someone?",
      "What are some things in your life that make you feel grounded?"
    ],
    "Apathetic": [
      "What small things have brought you joy, even if briefly?",
      "Is there something in your routine that gives you a sense of stability?",
      "Who in your life makes you feel at ease?",
      "Can you recall a moment when you felt proud of something, no matter how small?",
      "What are you grateful for today?"
    ],
    "Remorseful": [
      "What lessons have you learned from this experience?",
      "How have you grown as a person from past mistakes?",
      "What can you appreciate about the situation, even if it's difficult?",
      "Who in your life has helped you through challenging times?",
      "What positive steps have you taken since then?"
    ],
    "Hurt": [
      "When was the last time you felt supported during a difficult moment?",
      "What are some things in your life that bring you comfort?",
      "Who in your life has shown you kindness recently?",
      "What small acts of self-care could help you feel better?",
      "What positive qualities do you have that help you get through tough times?"
    ],
    "Angry": [
      "What aspects of this situation are within your control?",
      "What positive actions can you take to express your feelings in a healthy way?",
      "Who in your life helps you feel heard and understood?",
      "What can you appreciate about the situation, even if it's hard?",
      "What moments in your life have made you feel at peace despite challenges?"
    ],
    "Discouraged": [
      "What small victories can you celebrate today?",
      "Who in your life believes in you, even when you doubt yourself?",
      "What is one thing you’ve learned from this experience?",
      "What can you appreciate about the progress you’ve made so far?",
      "What positive things are you looking forward to?"
    ],
    "Guilty": [
      "What have you learned from this experience that can help you grow?",
      "How have you shown care or kindness to others recently?",
      "What are the good things you’ve done that you can be proud of?",
      "Who in your life has forgiven you and shown you compassion?",
      "What is one positive step you can take moving forward?"
    ],
    "Ashamed": [
      "What have you learned from this experience that will help you grow?",
      "Who in your life has shown you unconditional love or support?",
      "What are some positive actions you can take to move forward?",
      "What qualities in yourself are you proud of?",
      "What small acts of kindness can you offer yourself today?"
    ],
    "Depressed": [
      "What are some moments in your life that have brought you peace?",
      "Who in your life makes you feel understood and cared for?",
      "What are the small things you appreciate in your life right now?",
      "When was the last time you felt a sense of accomplishment?",
      "What are the things in your life that bring you comfort?"
    ],
    "Rejected": [
      "Who in your life makes you feel truly seen and appreciated?",
      "What positive experiences have you had with others recently?",
      "What are some qualities about yourself that others admire?",
      "What are some ways you've shown kindness to others?",
      "What is one thing you can do to feel more connected today?"
    ],
    "Inadequate": [
      "What are the things you’ve accomplished that you’re proud of?",
      "Who in your life has supported you through challenges?",
      "What small steps can you take today to feel more confident?",
      "What strengths do you bring to the table that others value?",
      "What positive actions can you take to build your confidence?"
    ],
    "Lonely": [
      "Who in your life makes you feel understood and supported?",
      "What are the things in your life that bring you comfort?",
      "What moments have brought you joy in the past?",
      "What small acts of kindness can you give to yourself today?",
      "Who can you reach out to for connection?"
    ],
    "Helpless": [
      "What aspects of your life are within your control?",
      "Who in your life helps you feel empowered?",
      "What are the small things you can do to take care of yourself?",
      "What are some moments in your life when you’ve felt strong?",
      "What are the things in your life that bring you peace?"
    ],
    "Embarrassed": [
      "What positive qualities about yourself do others admire?",
      "Who in your life has shown you kindness recently?",
      "What are the things in your life that bring you comfort?",
      "What can you learn from this experience to grow?",
      "What are some moments when you felt proud of yourself?"
    ]
  },
  SlightlyUnpleasant: {
    "Tired": [
      "What are the small things in your life that help you recharge?",
      "Who in your life helps you feel supported and cared for?",
      "What are some moments in your life that have brought you peace?",
      "What self-care activities can you incorporate to feel rested?",
      "What positive steps can you take to nurture your well-being?"
    ],
    "Overwhelmed": [
      "What small tasks can you focus on to regain control?",
      "Who in your life offers support when things feel too much?",
      "What are the things in your life that bring you peace?",
      "What have you accomplished so far that you can be proud of?",
      "What moments have helped you feel calm in the past?"
    ],
    "Anxious": [
      "What aspects of your life are within your control?",
      "Who in your life makes you feel calm and supported?",
      "What are the things that bring you peace, even if just for a moment?",
      "What positive actions can you take to feel more grounded?",
      "What are some things you appreciate about today?"
    ],
    "Distant": [
      "What are the things in your life that help you feel present?",
      "Who can you reach out to for a moment of connection?",
      "What activities make you feel grounded in the present moment?",
      "When was the last time you felt truly connected with someone?",
      "What parts of your environment bring you peace?"
    ],
    "Confused": [
      "What are some things in your life that feel certain or stable?",
      "Who in your life helps you see things more clearly?",
      "What are the things you know for sure, even if the rest feels uncertain?",
      "What small steps can you take to gain more clarity?",
      "What has helped you make decisions in the past?"
    ]
  },
  Neutral: {
    "Thoughtful": [
      "What positive actions can you take today or already have to show care to others?",
      "Who in your life makes you feel understood?",
      "What are the things you appreciate about the people around you?",
      "What moments today have made you feel connected?",
      "What are the things you value most in your life?"
    ],
    "Aware": [
      "What are the things in your life that bring you peace and clarity?",
      "Who in your life helps you see things from a different perspective?",
      "What are the small moments today that have helped you feel present?",
      "What positive actions can you take to stay mindful of the present moment?",
      "What is one thing you can do today to stay connected to yourself?"
    ],
    "Calm": [
      "What activities make you feel lighthearted and joyful?",
      "Who in your life shares your sense of fun and adventure?",
      "What are the things in your life that make you laugh?",
      "What small moments today have made you smile?",
      "What are you most excited to do for fun?"
    ],
    "Insecure": [
      "What are the qualities in yourself that you value?",
      "Who in your life believes in you, even when you doubt yourself?",
      "What positive actions have you taken recently that you’re proud of?",
      "What small steps can you take today to build your confidence?",
      "What makes you feel grounded and secure?"
    ],
    "Thankful": [
      "What are the things in your life that you appreciate the most?",
      "Who in your life has shown you kindness recently?",
      "What moments today have made you feel grateful?",
      "What positive actions can you take to express your gratitude?",
      "What small acts of kindness can you offer to others?"
    ]
  },
  SlightlyPleasant: {
    "Relaxed": [
      "What brings you a sense of calm and peace?",
      "How does your body feel when you're at ease?",
      "What recent moments have made you feel content?",
      "Who in your life brings you a sense of tranquility?",
      "What is one thing you can do today to maintain this sense of relaxation?"
    ],
    "Content": [
      "What are the things in your life that bring you joy?",
      "Who in your life makes you feel at peace?",
      "What small moments today have made you smile?",
      "What is something you’re grateful for right now?",
      "What positive steps can you take to maintain this sense of peace?"
    ],
    "Hopeful": [
      "What are the things in your life that give you hope?",
      "Who in your life shares your optimism and belief in the future?",
      "What are the small steps you can take to create the future you desire?",
      "What moments have reinforced your sense of hope?",
      "What are you most excited about in the future?"
    ],
    "Appreciated": [
      "What positive actions can you take today to show appreciation to others?",
      "Who in your life makes you feel valued and loved?",
      "What are the things you appreciate about yourself?",
      "What moments today have made you feel seen and heard?",
      "What small gestures of kindness can you offer to others?"
    ],
    "Faithful": [
      "Who in your life shares your values and beliefs?",
      "What are the things in your life that bring you a sense of purpose?",
      "What positive actions can you take to strengthen your faith?",
      "What moments today have reinforced your sense of trust?",
      "Who in your life makes you feel secure and supported?"
    ],
    "Trusting": [
      "What aspects of your life are you most confident about?",
      "Who in your life has shown you trust and support?",
      "What small steps can you take to build more trust in yourself?",
      "What positive actions can you take to strengthen your relationships?",
      "What are the things you trust about the world around you?"
    ],
    "Respected": [
      "What are the things you value most about your relationships?",
      "Who in your life shows you respect and admiration?",
      "What actions can you take today to show respect to others?",
      "What moments have made you feel valued and appreciated?",
      "What qualities do you admire in others that you also embody?"
    ]
  },
  VeryPleasant: {
    "Joyful": [
      "What moments today have made you feel truly alive?",
      "Who in your life shares your sense of excitement and joy?",
      "What are the things in your life that bring you happiness?",
      "What positive actions can you take to share your joy with others?",
      "What small moments today have made you smile?"
    ],
    "Excited": [
      "What are the things you’re most looking forward to?",
      "Who in your life shares your enthusiasm for life?",
      "What actions can you take today to pursue your passions?",
      "What moments today have filled you with energy and excitement?",
      "What positive steps can you take to embrace your excitement?"
    ],
    "Sensuous": [
      "What are the things in your life that make you feel connected to your senses?",
      "Who in your life shares your appreciation for the beauty around you?",
      "What moments today have made you feel alive and connected?",
      "What small acts of self-care can you incorporate to feel more at peace?",
      "What positive actions can you take to embrace your inner beauty?"
    ],
    "Energetic": [
      "What are the things that make you feel full of energy?",
      "Who in your life shares your enthusiasm and zest for life?",
      "What positive actions can you take to channel your energy into something meaningful?",
      "What moments today have made you feel strong and capable?",
      "What are the things in your life that give you vitality?"
    ],
    "Loving": [
      "Who in your life makes you feel truly loved?",
      "What are the things you appreciate most about your relationships?",
      "What small gestures of kindness can you offer to others today?",
      "What positive actions can you take to express your love?",
      "What moments today have made you feel connected to others?"
    ],
    "Cheerful": [
      "What are the things in your life that bring you joy and laughter?",
      "Who in your life shares your sense of humor and positivity?",
      "What small moments today have made you smile?",
      "What are the things you’re most excited about right now?",
      "What positive actions can you take to spread cheer to others?"
    ],
    "Proud": [
      "What accomplishments today have made you feel proud?",
      "Who in your life celebrates your successes and achievements?",
      "What are the things in your life that make you feel proud?",
      "What positive actions can you take to continue building your confidence?",
      "What small victories can you celebrate today?"
    ],
    "Peaceful": [
      "What are the things in your life that bring you a sense of calm?",
      "Who in your life makes you feel at ease and peaceful?",
      "What positive actions can you take to maintain this sense of tranquility?",
      "What moments today have made you feel centered?",
      "What are the things you appreciate most about today?"
    ],
    "Confident": [
      "What strengths do you possess that make you feel confident?",
      "Who in your life believes in you and encourages your growth?",
      "What small actions can you take to build your confidence?",
      "What moments today have made you feel empowered?",
      "What positive steps can you take to continue growing in confidence?"
    ]
  }
};

export default emotionsObject