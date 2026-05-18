# Tetris plan

Requirements for implementing tetris game

## Requirements

- Game loop
  - Selected shape (Game randomly selects one) moves downwards at a changing speed, depending on how many shapes the player has been able to drop without losing the game
  - The shapes are contained within a game area with the dimensions of 10 blocks width and undetermined height (roughly 30?)
  - Each shape consists of different set of 1 by 1 blocks:
    - Square: 2 x 2 blocks
    - I: 1 x 4 blocks
    - Right facing L: 3 x 1 blocks with a block above the right right most block
    - Left facing L: 3 x 1 blocks with a block above the left most block
    - T: 3 x 1 blocks with a block above the middle block
    - S: 2 x 1 blocks with an intersecting 2 x 2 blocks starting from above the bottom right block
    - Reverse S: Same as above, but the reverse implementation
  - When the shape is moving downwards, but it can no longer move downwards due to existing blocks blocking it, it will be left where it is, the next shape in queue is selected as the new falling shape, and the loop repeats
  - When there is a full line of blocks, it get's removed and player scores points based on how many lines were cleared at once
  - When user presses up, the selected blocks orientation is rotated 90 degrees clockwise, when applicable
  - When user presses left, the selected block moves 1 block towards left, when applicable
  - When user presses right, the selected block moves 1 block towards right, when applicable
  - When user presses down, the selected block's falling rate increases
  - When shapes have no more space to start falling from top end of the screen, the game ends
