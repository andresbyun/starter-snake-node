const strategy = (game) => {
    const { board, you } = game;
    const { body } = you;

    const head = body[0];
    
    if (head.y === 0 && head.x !== 0) {
        return 'left';
    }
    else if (head.x === 0 && head.y !== board.height - 1) {
        return 'down';
    }
    else if (head.y === board.height - 1 && head.x !== board.width - 1) {
        return 'right'
    }

    if (head.x === 0 && head.y === 0) {
        return 'down'
    }
    
    return 'up';
};

module.exports = {
    strategy,
};
