function bmiCal(weight, height) {
    var compute = weight / (height * height);
    return Math.round(compute);
}
