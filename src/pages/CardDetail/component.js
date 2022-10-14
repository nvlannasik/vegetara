import { render } from '@testing-library/react'
import React from 'react'
import { IMAGES } from '../../configs'
import PageBase from '../../components/layouts/PageBase';

export default class CardDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
    localStorage.setItem('count', this.state.count + 1,"tesd")
  }

  handleMinus = () => {
    this.setState({
      count: this.state.count - 1
    })

    if (this.state.count === 0) { 
      this.setState({
        count: 0
      })
    }
  }

  render() {
    const { count } = this.state
    return (
      <PageBase badge={count}>
      <div >
          <h1>CardDetail</h1>
        <div>
          <img src={IMAGES.BANNER} />
        </div>
        <h2>Foto</h2>
        <p>Harga 453534</p>
        <p>stock 234</p>
        <button onClick={this.handleAdd}>tambah</button>
          <button onClick={this.handleMinus}>kurang</button>
          <input type="number" value={this.state.count} />
        <h2>Deskripsi</h2>
        <p>deskripsi</p>
        </div>
      </PageBase>
    )
  }
}


