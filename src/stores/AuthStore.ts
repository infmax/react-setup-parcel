import {
  action, makeObservable, observable, runInAction
} from 'mobx'

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

class AuthStore {
  constructor() {
    makeObservable(this, {
      roles: observable,
      fetchAuth: action
    })
  }

  roles: string[] = [];

  fetchAuth = async() => {
    await timeout(1000)

    runInAction(() => {
      this.roles = ['test_role']
    })
  };
}

export default AuthStore
