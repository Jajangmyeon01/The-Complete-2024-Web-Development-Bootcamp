function HouseKeeper (yearsOfExp, name, cleaningRepertoire) {
    this.yearsOfExp = yearsOfExp;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("cleaning in progress...");
    }
}
