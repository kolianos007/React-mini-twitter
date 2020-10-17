import React from 'react'
import './PostStatusFilter.css'

export default class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props)
    this.buttons = [
      { name: 'all', label: 'Все' },
      { name: 'like', label: 'Понравилось' }
    ]
  }
  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const { filter, onFilterSelect } = this.props
      const active = this.props.filter === name
      const clazz = active ? 'btn-info' : 'btn-outline-secondary'
      return (
        <button key={name} type="button" className={`btn ${clazz}`} onClick={() => this.props.onFilterSelect(name)}>{label}</button>
      )
    })
    return (
      <div className="btn-group" >
        {buttons}
      </div>
    )
  }
}
