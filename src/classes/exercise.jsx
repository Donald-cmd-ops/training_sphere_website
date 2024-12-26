class Exercise {
    constructor(data, id) {
        this.name = data.name || "Unknown Name";
        this.sets = data.sets || "Unknown Set";
        this.reps = data.reps || "Unknown Reps";
        this.weight = data.weight || "Unknown Weight";
        this.restTime = data.restTime || "Unknown Rest Time";
        this.id = id || null;
    }
}