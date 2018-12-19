import React, { Component } from 'react'

import 'milligram/dist/milligram.min.css'

const toolkitVersions = [
  { value: 'cuda10_0', name: '10.0 (Sept 2018)'},
  { value: 'cuda9_2', name: '9.2 (May 2018)'},
  { value: 'cuda9_1', name: '9.1 (Dec 2017)'},
  { value: 'cuda9_0', name: '9.0 (Sept 2017)'}
]

const OSSupportedToolkitVersions = {
  ubuntu16_04: [
    'cuda10_0',
    'cuda9_2',
    'cuda9_1',
    'cuda9_0'
  ],
  ubuntu18_04: [
    'cuda10_0',
    'cuda9_0'
  ]
}

class App extends Component {
  state = {
    os: null,
    cudaVer: null,
    scriptContent: null,
    fetching: false
  }

  updateSelection = (os, cudaVer) => {
    this.setState({
      os,
      cudaVer,
      fetching: true
    }, () => {
      this.getScriptContents(`${os}_${cudaVer}`)
    })
  }

  getScriptContents = (OSAndCudaVer) => {
    fetch(`/scripts/${OSAndCudaVer}.sh`)
    .then(x => {
      if (x.headers.get('content-type').includes('application/x-sh')) {
        return x.text()
      }
      throw new TypeError('Invalid combo')
    })
    .then(x => {
      this.setState({
        scriptContent: x,
        fetching: false
      })
    })
    .catch(err => {
      this.setState({
        scriptContent: null,
        fetching: false
      })
    })
  }

  render () {
    return (
      <div style={{ padding: '30px' }}>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <h3>
            Cuda Bootstrap
          </h3>

          <h5>
            Easily install CUDA on your Linux-based ML/DL machines
          </h5>
        </div>

        <hr />

        <div>
          <form>
            <label>
              Operating System
              <select onChange={(e) => this.updateSelection(e.target.value, 'default')} value={this.state.os || 'default'}>
                <option value='default'>Select your OS</option>
                <option value='ubuntu18_04'>Ubuntu 18.04</option>
                <option value='ubuntu16_04'>Ubuntu 16.04</option>
              </select>
            </label>

            <label>
              CUDA Toolkit Version
              <select onChange={(e) => this.updateSelection(this.state.os, e.target.value)} value={this.state.cudaVer || 'default'}>
                <option value='default'>Select your CUDA Toolkit Version</option>
                {
                  toolkitVersions.map(x => {
                    if (OSSupportedToolkitVersions[this.state.os] !== undefined && OSSupportedToolkitVersions[this.state.os].indexOf(x.value) !== -1) {
                      return (<option key={x.value} value={x.value}>{x.name}</option>)
                    }
                    return null
                  })
                }
              </select>
            </label>

            <label>
              *Only supports x86_64 architecture for now. <br/>
              ** <a href='https://github.com/kendricktan/cuda-bootstrap'>Don't see what you need/want? Make a PR!</a>
            </label>
          </form>
        </div>

        <hr />

        <div>
          <h5>One Liner Install</h5>
          <input readOnly style={{ minWidth: '100%'}} value={
            (this.state.fetching) ? 'Loading...' : (
              (this.state.scriptContent === null) ? 'Not available yet...' :
              `wget https://cuda-bootstrap.com/scripts/${this.state.os}_${this.state.cudaVer}.sh -O - | sudo -E bash`
            )
          } />

          <h5>Script Contents</h5>
          <textarea readOnly style={{ minWidth: '100%', minHeight: '240px' }} value={
            (this.state.scriptContent === null) ? '' : this.state.scriptContent
          } />
        </div>

        <hr />

        <div style={{ textAlign: 'center' }}>
          <a href='https://github.com/kendricktan/cuda-bootstrap'>github</a>
          &nbsp;&nbsp;| made by <a href='https://kndrck.co?ref=cuda-bootstrap'>kendricktan</a>
        </div>
      </div>
    )
  }
}

export default App
