import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import { isBackend } from 'ui/isBackend'


import Context from './Context'

class ContextProvider extends Component {
  constructor(props){
    super(props)
    if (props.content) {
      this.state = this.setContentTree(props.content)
    } else {
      this.state = {
        contentTree:[],
        idList     :[]
      }

    }
    props.content && this.setContentTree(props.content)
  }

  setContentTree(html) {
    //console.log('THE CONTENT IS', html)
    if (!isBackend) {
      const el = document.createElement(null)
      el.innerHTML = html
      const elNodeList = this.props.levels == 2 ?
        el.querySelectorAll('h2, h3') :
        el.querySelectorAll('h2')
      const elArray = Array.from(elNodeList)
      const contentTree = []

      var a = { children: [] }

      elArray.forEach((e,i) => {
        const { id, innerText } = e
        if (e.tagName.toLowerCase() == 'h2'){
          if (a.id) {
            contentTree.push(a)
            a = { children: [] }
          }
          a.id = id
          a.innerText = innerText
        }
        else {
          a.children.push({
            id,
            innerText
          })
        }
        if (i  == elArray.length -1) contentTree.push(a)
      })

      const idList = elArray.reduce((a,e) =>
      {
        a.push(e.id)
        return a
      }
      , [])

      return{
        contentTree,
        idList
      }
      

    }
    else {
      return {
        contentTree:[],
        idList:[]
      }
    }
  }

  componentDidUpdate(p) {
    //console.log(778877, this.props.content)
    if(p.content != this.props.content) {
      //console.log('received content', this.props.content)
      this.setState({
        ...this.state,
        ...this.setContentTree(this.props.content)
      })
    }
  }

  render() {
    //const loading = this.props.initial_data.loading
    return (
      <Context.Provider
        value={{
          ...this.state,
          //setContentTree:this.setContentTree
        }}
      >
        { this.props.children }
      </Context.Provider>
    )
  }
}

ContextProvider.defaultProps = {
  levels:2,
}

ContextProvider.propTypes = {
  /**
   * How many levels we should make the tree for
   */
  levels:PropTypes.number,

  /**
   * The source
  */
  content:PropTypes.string,

  /**
   * The JSX children of this Context Provider
   */
  children:PropTypes.node
}

export default ContextProvider
