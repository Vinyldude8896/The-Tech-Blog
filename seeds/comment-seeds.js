const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Thanks for sharing this.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'This helps so much. Love it',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Share more resources with us.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Love the shortcuts',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'Thanks, this helped me a lot.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Very ggreat post, appreciated.',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'Where did you find this?',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Thanks for sharing the tips.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Thanks.',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'Really useful post.',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'Man this helped me out of a jam, thanks@!',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Send more posts!',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Thanks for sharing, was super useful.',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'appreciate the post.',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'great post.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Thanks for sharing this post.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'I found this really helpful, thank you.',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'Great postm, thanks for sharing',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:
      'Nice! really useful.',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:
      'Can I use that anywhere?.',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'Amazing, thanks for sharing.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'cool!.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'I am so smart S-M-R-T.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:
      'Thanks Leela',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text:
      'Thanks for sharing this with the community',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Great info, super useful.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Thanks, really helpful',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Do I have to pay for this service?',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'Spelling errors all over man.',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'Useful.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'liked!.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Im going to share this!.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Thanks again.',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'Is that addition or subtraction methodology?',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'can you show an example?.',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'Can you add any more?',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'Thanks, really useful.',
    user_id: 10,
    post_id: 7
  },
  {
    comment_text: 'Sounds like a song to me!',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'Go tell the mountain.',
    user_id: 8,
    post_id: 1
  },
  {
    comment_text: 'Thanks for the useful post.',
    user_id: 9,
    post_id: 7
  },
  {
    comment_text:
      'Brilliant!',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'I tried this, but it didnt work that way for me.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'I will test this out. thanks',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'Cant really follow the logic',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text:
      'Sounds great! thanks man!',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'Integer Boolean String Object',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text: 'What website can i find that info at?',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text:
      'WOW! Great post, thanks!',
    user_id: 2,
    post_id: 6
  },
  {
    comment_text: 'Who doesnt know that already?',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'decorative styles',
    user_id: 10,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;