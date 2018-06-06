class SPromise {
  constructor(execFunc) {
    this.chain = [];
    this.handleError = () => {};
    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onRject.bind(this);

    execFunc(this.onResolve, this.onReject);
  }

  then(onResolve) {
    this.chain.push(onResolve);
    return this;
  }

  catch(handleError) {
    this.handleError = handleError;
    return this;
  }

  onResolve(value) {
    let storedValue = value;
    try {
      this.promiseChain.forEach(nextFunction => {
        storedValue = nextFunction(storedValue);
      });
    } catch (error) {
      this.promiseChain = [];
      this.onReject(error);
    }
  }

  onReject(error) {
    this.handleError(error);
  }
}

module.exports = SPromise;
