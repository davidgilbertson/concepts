import React from 'react';

const TITLES = [
  'Nunc viverra imperdiet',
  'Pellentesque habitant morbi',
  'Tristique senectus',
  'Proin pharetra nonummy pede',
];

const IMAGES = [
  'https://lorempixel.com/800/600/city',
  'https://lorempixel.com/500/400/city',
  'https://lorempixel.com/300/300/city',
];

const RANKS = [3, 3, 3, 2, 2, 1, 2, 3, 3, 3];

// a long, medium, short intro
const INTROS = [
  (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
        porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
        purus lectus malesuada libero, sit amet commodo magna eros quis urna.
      </p>

      <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.</p>

      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
      </p>
    </div>
  ),
  (
    <div>
      <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.</p>

      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
        porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
        purus lectus malesuada libero, sit amet commodo magna eros quis urna.
      </p>
    </div>
  ),
  (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
        porttitor congue massa, sit amet commodo magna eros quis urna.
      </p>
    </div>
  ),
];

const REMAINDER = (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
      porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
      purus lectus malesuada libero, sit amet commodo magna eros quis urna.
    </p>

    <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.</p>

    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada
      fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
    </p>

    <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.</p>

    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada
      fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
      porttitor congue Nunc viverra imperdiet enim. Fusce est. Vivamus a
      tellus.
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
      porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
      purus lectus malesuada libero, sit amet commodo magna eros quis urna.
    </p>

    <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.</p>

    <p>Pellentesque habitant morbi tristique senectus et netus et</p>

    <p>
      And to continue with this story... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
      porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
      purus lectus malesuada libero, sit amet commodo magna eros quis urna.
    </p>

    <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.</p>

    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada
      fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
      porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
      purus lectus malesuada libero, sit amet commodo magna eros quis urna.
    </p>

    <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.</p>

    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada
      fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
      porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
      purus lectus malesuada libero, sit amet commodo magna eros quis urna.
    </p>

    <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.</p>

    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada
      fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
    </p>
  </div>
);

export default function makeStories(count = 10) {
  const result = [];

  for (let i = 0; i < count; i++) {
    const rank = RANKS[i % RANKS.length];
    const showPicture = rank === 1 || (rank === 2 && i % 2); // show pictures for all rank 1 and half rank 2
    const image = showPicture
      ? `${IMAGES[rank - 1]}/${i % 9}` // bigger image for higher rank
      : null;

    result.push({
      id: i,
      title: TITLES[i % TITLES.length],
      rank,
      author: 'Sam Spinoza',
      date: `${i + 3} hours ago`,
      intro: INTROS[rank - 1], // bigger intro for higher rank
      image,
      remainder: REMAINDER,
    })
  }

  return result;
};
