class Utility {
    static idCounter = 0;
    static getId() {
        return this.idCounter++;
    }
};

const PathSnapPoint = {
    LEFT: "left",
    RIGHT: "right",
    TOP: "top",
    BOTTOM: "bottom"
}

export {
    Utility, PathSnapPoint
}