class Left {
  constructor(value) {
    this.value = value;
  }

  isLeft() {
    return true;
  }

  isRight() {
    return false;
  }
}

class Right {
  constructor(value) {
    this.value = value;
  }

  isLeft() {
    return false;
  }

  isRight() {
    return true;
  }
}

function Either(value) {
  if (value instanceof Left || value instanceof Right) {
    return value;
  }

  throw new Error('Invalid Either value');
}

function left(value) {
  return new Left(value);
}

function right(value) {
  return new Right(value);
}

export { Either, left, right };
