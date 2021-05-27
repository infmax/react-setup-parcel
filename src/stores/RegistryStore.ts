import {
  action, makeObservable, observable, runInAction
} from 'mobx'

interface Idata {
  key: string;
  name: string;
  id: string;
}

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

class RegistryStore {
  constructor() {
    makeObservable(this, {
      columns: observable,
      data: observable,
      loading: observable,
      fetchData: action,
      append: action
    })
  }

  columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    }
  ];

  data: Idata[] = [
    {
      key: '1',
      id: '1',
      name: 'Mike'
    }
  ];

  loading = true;

  fetchData = async() => {
    this.loading = true
    // emulate backend response timeout
    await timeout(1000)

    runInAction(() => {
      this.loading = false
    })
  };

  append = (values: Idata) => {
    this.data.push(values)

    this.data = this.data.slice()
  };
}

export default RegistryStore
